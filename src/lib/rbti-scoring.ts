import { rbtiQuestions } from "@/data/rbti-questions";
import { rbtiPersonalities, rbtiSpecialPersonality, type Personality } from "@/data/rbti-personalities";
import { rbtiDimensionDefs } from "@/data/rbti-dimensions";

export interface DimensionScore {
  code: string;
  name: string;
  model: string;
  modelName: string;
  raw: number;
  max: number;
  level: "L" | "M" | "H";
  levelNum: number; // 0,1,2
  percentage: number;
}

export interface TestResult {
  personality: Personality;
  similarity: number;
  dimensions: DimensionScore[];
  isSpecial: boolean;
  matchDetails: { code: string; name: string; similarity: number }[];
}

function rawToLevel(raw: number): "L" | "M" | "H" {
  if (raw <= 3) return "L";
  if (raw === 4) return "M";
  return "H";
}

function levelToNum(level: "L" | "M" | "H"): number {
  if (level === "L") return 0;
  if (level === "M") return 1;
  return 2;
}

export function calculateRbtiResult(
  answers: Record<number, number>,
  hiddenAnswers?: { drink?: string; drinkAttitude?: string }
): TestResult {
  const dims = calculateRbtiDimensions(answers);

  if (
    hiddenAnswers?.drink === "coffee" &&
    hiddenAnswers?.drinkAttitude === "addict"
  ) {
    return {
      personality: rbtiSpecialPersonality,
      similarity: 100,
      dimensions: dims,
      isSpecial: true,
      matchDetails: [],
    };
  }

  const userVector = dims.map((d) => d.levelNum);

  const ranked = rbtiPersonalities.map((p) => {
    let distance = 0;
    let exact = 0;
    for (let i = 0; i < 15; i++) {
      const diff = Math.abs(userVector[i] - p.vector[i]);
      distance += diff;
      if (diff === 0) exact++;
    }
    const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
    return { personality: p, distance, exact, similarity };
  });

  ranked.sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (a.exact !== b.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const best = ranked[0];

  const matchDetails = ranked.slice(0, 5).map((r) => ({
    code: r.personality.code,
    name: r.personality.name,
    similarity: r.similarity,
  }));

  return {
    personality: best.personality,
    similarity: best.similarity,
    dimensions: dims,
    isSpecial: false,
    matchDetails,
  };
}

function calculateRbtiDimensions(answers: Record<number, number>): DimensionScore[] {
  return rbtiDimensionDefs.map((def) => {
    const dimQuestions = rbtiQuestions.filter((q) => q.dimension === def.code);
    const max = dimQuestions.length * 3;
    let raw = 0;
    for (const q of dimQuestions) {
      raw += answers[q.id] ?? 2;
    }
    const percentage = Math.round((raw / max) * 100);
    const level = rawToLevel(raw);
    return {
      code: def.code,
      name: def.name,
      model: def.model,
      modelName: def.modelName,
      raw,
      max,
      level,
      levelNum: levelToNum(level),
      percentage,
    };
  });
}

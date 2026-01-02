-- CreateTable
CREATE TABLE "AIInsight" (
    "id" TEXT NOT NULL,
    "aiExplanation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AIInsight_pkey" PRIMARY KEY ("id")
);

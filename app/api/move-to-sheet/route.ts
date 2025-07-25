import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { record, sheet } = await req.json();

    if (!record || !sheet) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const sheetPath = path.join(process.cwd(), "public", `${sheet}.json`);

    let currentData: any[] = [];

    try {
      const file = await fs.readFile(sheetPath, "utf-8");
      currentData = JSON.parse(file);
    } catch (err) {
      // File likely doesn't exist, fallback to empty array
      console.warn(`Creating new sheet file: ${sheetPath}`);
      currentData = [];
    }

    currentData.push(record);

    await fs.writeFile(sheetPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to move record:", err);
    return new NextResponse("Server Error", { status: 500 });
  }
}

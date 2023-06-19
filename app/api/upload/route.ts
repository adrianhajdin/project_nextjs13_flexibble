import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// @ts-ignore
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function GET() {
  return NextResponse.json({ message: "Upload Works" });
}

export async function POST(request: Request) {
  const { path } = await request.json();

  // if (!path) {
  //   return NextResponse.json(
  //     { message: "Image path is required" },
  //     { status: 400 }
  //   );
  // }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 1000, crop: "scale" }],
    };

    const result = await cloudinary.v2.uploader.upload(path, options);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to upload image on cloudinary" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { GeocodeAddress } from "@/lib/geocodeaddress";

const API_URL =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.712776,-74.005974&radius=1500&type=restaurant&key=GOOGLE_MAPS_API_KEY`";
// "https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAPS_API_KEY&loading=async&libraries=places&callback=initMap";
// "https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/businessLocations";

export async function GET() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.Error}`);
    }
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Get coordinates for the address
    const coordinates = await GeocodeAddress(body.address);

    const locationData = {
      ...body,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to create location:", error);
    return NextResponse.json(
      { error: "Failed to create location" },
      { status: 500 }
    );
  }
}

// curl --location 'https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/'

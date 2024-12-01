export interface Wallpaper {
  url: string;
  name: string;
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): Wallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): Wallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): Wallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.library);
}

export default function useWallpapers(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/I6bTnmFYSkSaPMg7M4ZdGQ",
      name: "Portrait",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/krnsXS2tTRWosYjOQ_TH4g",
      name: "Ugly",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/_ADE4WvNR2SrBGt-VfsgNw",
      name: "Alone",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/RIn7JG6rSyGNcMZ9VzJbaQ",
      name: "Abstract",
      liked: false,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/I83Q4D34RlCrcVHCVxzTig",
      name: "Sunset",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/5S5JN8XvSI64t4lTfMAdWg",
      name: "Cat",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/9KR3NAr8SmaXstwC0wncyQ",
      name: "Women",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
      name: "Eagle",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/P0MYsQS6Sj-M3MG2DDbnUw",
      name: "Gym",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ccniA1vmSjK25KW1x_tXRg",
      name: "Calm",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/253FKa7nTfqoFh-qhbkV_Q",
      name: "Ex",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6L4FPclYRl-R0uAt8ywuFw",
      name: "Animal",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ddguzEutRiqLmhoU3D8y2A",
      name: "Music",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ABaY8YGjSEO6kuHq7c0AfQ",
      name: "Fight",
      liked: false,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/R3L76O9wSJeDiwYHrl6pfg",
      name: "Gorilla",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/o215L6zRTTORJpVwqjgjOA",
      name: "Skeleton",
      liked: false,
      suggested: true,
      library: true,
    },
    // Additional images
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/zcbj2D2V0T56j-ub8xkZ0Q",
      name: "Beach",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/xxhfNG8YOZt8idzwmw0vHg",
      name: "Forest",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/f9duNzYoF4Pqp31iy7Uknw",
      name: "Mountain",
      liked: false,
      suggested: true,
      library: false,
    },
  ];
}

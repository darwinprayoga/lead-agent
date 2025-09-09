"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Check,
  Clock,
  Calendar,
  Target,
  Shield,
  Users,
  Star,
  User,
  ChevronDown,
  DollarSign,
} from "lucide-react";
import { useEffect } from "react";
import FormContent from "@/components/form-content";

export default function LeadAgentLanding() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "John Rohde",
      company: "Premium Properties",
      content:
        "The Lead Agent have been fantastic - Constantly giving me 10+ appraisals per week.",
      platform: "Google Maps",
      initials: "JR",
    },
    {
      id: 2,
      name: "David Simmons",
      company: "Elite Realty Partners",
      content:
        "The team at The Lead Agent take prospecting seriously and deliver high professionalism.",
      platform: "LinkedIn",
      initials: "DS",
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      company: "Coastal Properties",
      content:
        "Since partnering with The Lead Agent, my business has transformed. The quality of leads is exceptional, and the territory exclusivity gives me confidence in my investment.",
      platform: "Instagram",
      initials: "SM",
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "Metro Realty Group",
      content:
        "I was skeptical at first, but The Lead Agent delivered exactly what they promised. 15+ qualified appointments every month.",
      platform: "Google Maps",
      initials: "MC",
    },
    {
      id: 5,
      name: "Emma Thompson",
      company: "Thompson & Associates",
      content:
        "Outstanding service! The Lead Agent helped me scale from 5 listings to 20+ per month.",
      platform: "LinkedIn",
      initials: "ET",
    },
    {
      id: 6,
      name: "Robert Wilson",
      company: "Wilson Realty Network",
      content:
        "The Lead Agent's approach is refreshingly honest. No lock-in contracts, guaranteed results.",
      platform: "Instagram",
      initials: "RW",
    },
    {
      id: 7,
      name: "Alex Lee",
      company: "Prestige Properties",
      content:
        "Exceptional results month after month. The Lead Agent team truly understands the real estate market.",
      platform: "Google Maps",
      initials: "AL",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[var(--antiflash-white)]">
      {/* Header */}
      <header className="bg-[var(--antiflash-white)]/10 backdrop-blur-md border-b border-[var(--penn-blue)]/20 sticky top-0 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg
                className="h-9 md:h-10 text-white"
                viewBox="0 0 3257 572"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2761.37 571.7C2761.37 571.475 2762.05 570.199 2762.8 568.848C2763.62 567.497 2767 559.844 2770.3 551.964C2773.68 544.01 2777.36 535.531 2778.56 533.205C2779.76 530.803 2783.51 522.249 2786.89 514.22C2790.26 506.191 2793.34 499.287 2793.64 498.837C2793.94 498.462 2797.02 491.483 2800.39 483.454C2803.77 475.425 2807.67 466.495 2809.1 463.569C2810.45 460.717 2814.5 451.712 2817.95 443.683C2829.28 417.27 2839.26 394.608 2840.76 391.531C2841.59 389.88 2845.04 382.001 2848.42 373.972C2851.79 365.943 2855.02 358.739 2855.55 357.839C2856.07 356.938 2859.15 350.035 2862.3 342.381C2865.53 334.727 2869.05 326.623 2870.18 324.371C2871.31 322.12 2874.98 313.641 2878.43 305.612C2881.81 297.582 2884.96 290.304 2885.49 289.478C2886.01 288.653 2889.09 281.749 2892.32 274.095C2895.47 266.441 2899.22 257.887 2900.65 254.96C2903.12 249.933 2908.3 238.002 2923.91 201.758C2927.81 192.678 2931.34 184.874 2931.64 184.499C2932.01 184.049 2934.94 177.445 2938.09 169.791C2941.32 162.137 2944.84 154.033 2945.97 151.782C2947.09 149.531 2950.77 141.051 2954.22 133.022C2957.6 124.993 2961.2 116.739 2962.25 114.638C2963.3 112.611 2966.75 104.582 2970.06 96.8533C2973.28 89.1243 2976.96 80.87 2978.16 78.4688C2979.36 76.0675 2982.44 69.0889 2984.99 62.8607C2987.62 56.7075 2991.14 48.6033 2992.87 44.8513C2994.67 41.1744 2998.27 32.8451 3000.97 26.4668C3003.67 20.0885 3007.28 11.9843 3008.93 8.53248C3010.65 5.00565 3012 1.62889 3012 1.02858C3012.08 0.353229 3012.68 1.32874 3013.5 3.20471C3014.25 5.08068 3016.81 10.9337 3019.13 16.3365C3021.46 21.7393 3026.56 33.5204 3030.39 42.6002C3034.21 51.6799 3039.02 63.0107 3041.12 67.7382C3045.55 78.0185 3051.17 91.3004 3059.73 111.636C3063.18 119.89 3067.01 128.67 3068.21 131.146C3069.41 133.622 3073.16 142.402 3076.54 150.656C3079.91 158.91 3083.52 167.165 3084.42 169.041C3085.32 170.917 3088.39 177.97 3091.17 184.799C3093.95 191.627 3097.4 199.732 3098.82 202.808C3100.25 205.885 3104.15 215.04 3107.45 223.069C3110.75 231.098 3113.76 238.077 3114.06 238.452C3114.43 238.902 3117.88 247.006 3121.86 256.461C3125.76 265.991 3129.66 275.146 3130.49 276.872C3131.31 278.598 3134.77 286.702 3138.14 294.881C3141.52 303.06 3144.52 310.114 3144.82 310.489C3145.2 310.939 3148.35 318.218 3151.8 326.623C3155.25 335.102 3159.3 344.557 3160.81 347.633C3162.23 350.71 3166.06 359.715 3169.28 367.519C3172.44 375.398 3175.51 382.451 3176.04 383.277C3176.56 384.102 3179.72 391.456 3183.02 399.635C3186.39 407.815 3189.77 415.844 3190.6 417.42C3191.42 419.07 3194.87 427.025 3198.17 435.204C3201.55 443.383 3205 451.412 3205.83 453.063C3206.65 454.714 3210.48 463.494 3214.31 472.573C3218.06 481.653 3224.14 495.985 3227.66 504.465C3231.27 512.944 3235.62 523.074 3237.42 526.976C3239.22 530.878 3242.52 538.532 3244.62 543.86C3246.8 549.263 3250.4 557.592 3252.58 562.395C3254.83 567.197 3256.63 571.324 3256.63 571.625C3256.63 571.85 3241.7 571.925 3223.46 571.85L3190.3 571.625L3183.24 554.366C3179.41 544.911 3173.04 529.528 3169.21 520.223C3165.38 510.918 3159 495.385 3155.03 485.705C3151.05 476.025 3147 466.345 3145.95 464.244C3144.97 462.068 3141.45 453.663 3138.14 445.484C3134.84 437.23 3130.71 427.325 3128.99 423.423C3125.16 414.643 3116.76 394.533 3108.35 373.522C3104.83 364.892 3100.85 355.212 3099.42 352.136C3098 349.059 3094.47 340.43 3091.54 333.001C3088.62 325.572 3085.77 318.818 3085.24 317.993C3084.72 317.168 3081.11 308.763 3077.29 299.233C3073.46 289.778 3070.08 281.674 3069.78 281.224C3069.48 280.849 3065.96 272.369 3061.9 262.464C3057.85 252.559 3054.33 244.155 3054.02 243.704C3053.72 243.329 3050.35 235.225 3046.52 225.695C3042.69 216.24 3039.32 208.061 3039.02 207.686C3038.64 207.236 3035.49 199.657 3031.89 190.802C3028.29 181.947 3024.53 173.018 3023.56 170.917C3022.51 168.891 3019.43 161.462 3016.66 154.558C3013.88 147.58 3011.33 141.877 3011.03 141.952C3010.13 141.952 3005.77 151.332 2998.2 169.416C2987.99 193.729 2983.56 204.159 2979.59 213.314C2977.49 218.041 2972.83 229.147 2969.23 237.851C2965.55 246.631 2961.73 255.561 2960.68 257.737C2959.63 259.913 2955.8 268.617 2952.27 277.097C2934.41 319.644 2931.86 325.722 2930.59 328.123C2929.84 329.549 2926.08 338.329 2922.26 347.633C2909.95 377.574 2900.42 400.461 2899.22 402.787C2898.62 404.063 2895.47 411.492 2892.32 419.296C2889.09 427.175 2885.71 435.054 2884.81 436.93C2883.84 438.806 2880.69 446.31 2877.76 453.663C2874.83 460.942 2870.93 470.247 2869.13 474.299C2867.25 478.276 2863.43 487.431 2860.5 494.56C2857.57 501.688 2854.5 508.817 2853.75 510.393C2852.92 511.969 2849.99 518.797 2847.29 525.551C2844.52 532.304 2840.46 541.759 2838.36 546.487C2836.19 551.214 2832.89 558.943 2831.08 563.52L2827.78 572H2794.62C2776.31 572 2761.37 571.85 2761.37 571.7Z"
                  className="fill-current"
                />
                <path
                  d="M2025.2 433.9C2004.7 431.9 1986.9 420.6 1978 403.8C1974.7 397.7 1971 384.7 1971 379.3V376H1981.5C1987.3 376 1992 376.3 1992 376.8C1992 377.2 1992.7 380.6 1993.5 384.3C1996.2 397.1 2003.5 406.5 2014.8 411.8C2020.1 414.3 2021.4 414.5 2034 414.5C2049.6 414.4 2053.6 413.2 2061.5 405.9C2072 396.2 2075.1 386.9 2075.8 362.5L2076.3 344.6L2069.2 351.1C2057.6 361.9 2045.9 366.4 2030 366.2C2012.9 366.1 1999.6 360.7 1987.9 349C1974.6 335.9 1968.9 320.2 1968.9 297.5C1968.9 276 1974.2 261.7 1987 248.9C1999.1 236.6 2013.2 230.9 2031 230.9C2047.4 230.9 2057.5 234.8 2069.2 245.9L2076 252.2V242.6V233H2087H2098V297.3C2098 368.4 2097.3 381.7 2093.6 393.6C2084.7 421.3 2058 437.1 2025.2 433.9ZM2051.5 343.7C2066.5 336.7 2075.7 321.3 2076.7 301.5C2077.8 279.1 2068.8 261.5 2052 253.6C2045.9 250.7 2044.8 250.5 2034 250.5C2023.2 250.5 2022.1 250.7 2015.9 253.6C2003.7 259.4 1994.7 271.4 1992 285.8C1990.1 295.2 1991.2 311 1994.2 319.1C1998.8 331.5 2007.8 340.9 2019.2 345.1C2023.5 346.7 2026.5 347 2035 346.7C2044 346.5 2046.4 346 2051.5 343.7Z"
                  className="fill-current"
                />
                <path
                  d="M442.8 365.9C425.5 364 409.4 355 400.4 342.4C391.5 329.9 387.9 317.6 387.9 299C387.9 276.8 393.7 261.3 407 247.9C419 235.7 431.3 230.9 450 230.9C485.8 230.9 507.2 253.2 510.6 293.8L511.3 302H460.6H410V305.8C410 307.9 410.7 312.2 411.5 315.3C415 328.6 422.4 337.9 433.8 343.3C440.1 346.3 441.2 346.5 452 346.5C462.7 346.5 463.9 346.3 469.5 343.6C476.1 340.4 486.3 330.8 489.5 324.7C490.6 322.7 491.8 321 492.3 321C493.2 321 507.1 328.8 508.4 330C509.8 331.4 503.9 340.3 496.1 348.1C482.2 362 463.5 368.3 442.8 365.9ZM487.5 280.3C486.5 274.6 481.3 265.3 476.6 260.6C474.3 258.3 469.7 255 466.4 253.4C461 250.8 459.6 250.5 450 250.5C440.5 250.5 438.9 250.8 433.8 253.3C423.6 258.3 415.9 267.6 412.6 278.8L411.1 284H449.7H488.2L487.5 280.3Z"
                  className="fill-current"
                />
                <path
                  d="M964.8 365.9C947.5 364 931.4 355 922.4 342.4C913.5 329.9 909.9 317.6 909.9 299C909.9 276.8 915.7 261.3 929 247.9C941 235.7 953.3 230.9 972 230.9C1007.8 230.9 1029.2 253.2 1032.6 293.8L1033.3 302H982.6H932V305.8C932 307.9 932.7 312.2 933.5 315.3C937 328.6 944.4 337.9 955.8 343.3C962.1 346.3 963.2 346.5 974 346.5C984.7 346.5 985.9 346.3 991.5 343.6C998.1 340.4 1008.3 330.8 1011.5 324.7C1012.6 322.7 1013.8 321 1014.3 321C1015.2 321 1029.1 328.8 1030.4 330C1031.8 331.4 1025.9 340.3 1018.1 348.1C1004.2 362 985.5 368.3 964.8 365.9ZM1009.5 280.3C1008.5 274.6 1003.3 265.3 998.6 260.6C996.3 258.3 991.7 255 988.4 253.4C983 250.8 981.6 250.5 972 250.5C962.5 250.5 960.9 250.8 955.8 253.3C945.6 258.3 937.9 267.6 934.6 278.8L933.1 284H971.7H1010.2L1009.5 280.3Z"
                  className="fill-current"
                />
                <path
                  d="M1177.5 366C1162.9 364.2 1151.7 358.8 1141.3 348.4C1128.6 335.6 1122.9 319.9 1122.9 297.5C1122.9 275.7 1128.3 261.7 1141.5 248.5C1153.9 236 1166.9 230.8 1185 230.9C1201.5 230.9 1213.3 235.6 1224 246.3L1230 252.3V243.2V234H1241H1252V298.5V363H1241H1230V353.9V344.8L1223.1 351.2C1210.3 363 1194.7 368.1 1177.5 366ZM1206.1 343.3C1221.8 335.5 1231 318.8 1231 298C1231 282.4 1226 269.9 1215.9 260.5C1208.1 253.4 1201.4 250.8 1189 250.3C1181.3 249.9 1178.4 250.2 1173.8 251.9C1155.2 258.4 1145.1 274.7 1145 298.1C1145 317.5 1152.9 334.2 1165.7 341.7C1173.1 346 1177.6 347 1189 346.7C1198.6 346.5 1200.2 346.2 1206.1 343.3Z"
                  className="fill-current"
                />
                <path
                  d="M1404.5 366C1389.9 364.2 1378.7 358.8 1368.3 348.4C1355.6 335.6 1349.9 319.9 1349.9 297.5C1349.9 275.7 1355.3 261.7 1368.5 248.5C1380.9 236 1393.9 230.8 1412 230.9C1428.5 230.9 1440.3 235.6 1451 246.3L1457 252.3V193.7V135H1468H1479V249V363H1468H1457V353.9V344.8L1450.1 351.2C1437.3 363 1421.7 368.1 1404.5 366ZM1433.1 343.3C1448.8 335.5 1458 318.8 1458 298C1458 282.4 1453 269.9 1442.9 260.5C1435.1 253.4 1428.4 250.8 1416 250.3C1408.3 249.9 1405.4 250.2 1400.8 251.9C1382.2 258.4 1372.1 274.7 1372 298.1C1372 317.5 1379.9 334.2 1392.7 341.7C1400.1 346 1404.6 347 1416 346.7C1425.6 346.5 1427.2 346.2 1433.1 343.3Z"
                  className="fill-current"
                />
                <path
                  d="M2250.8 365.9C2233.5 364 2217.4 355 2208.4 342.4C2199.5 329.9 2195.9 317.6 2195.9 299C2195.9 276.8 2201.7 261.3 2215 247.9C2227 235.7 2239.3 230.9 2258 230.9C2293.8 230.9 2315.2 253.2 2318.6 293.8L2319.3 302H2268.6H2218V305.8C2218 307.9 2218.7 312.2 2219.5 315.3C2223 328.6 2230.4 337.9 2241.8 343.3C2248.1 346.3 2249.2 346.5 2260 346.5C2270.7 346.5 2271.9 346.3 2277.5 343.6C2284.1 340.4 2294.3 330.8 2297.5 324.7C2298.6 322.7 2299.8 321 2300.3 321C2301.2 321 2315.1 328.8 2316.4 330C2317.8 331.4 2311.9 340.3 2304.1 348.1C2290.2 362 2271.5 368.3 2250.8 365.9ZM2295.5 280.3C2294.5 274.6 2289.3 265.3 2284.6 260.6C2282.3 258.3 2277.7 255 2274.4 253.4C2269 250.8 2267.6 250.5 2258 250.5C2248.5 250.5 2246.9 250.8 2241.8 253.3C2231.6 258.3 2223.9 267.6 2220.6 278.8L2219.1 284H2257.7H2296.2L2295.5 280.3Z"
                  className="fill-current"
                />
                <path
                  d="M50 269.5V176H25H0V165.5V155H61.5H123V165.5V176H98H73V269.5V363H61.5H50V269.5Z"
                  className="fill-current"
                />
                <path
                  d="M190 249V135H201H212V191.6V248.3L217.5 243.1C237.2 224.5 272.2 227.3 285.7 248.6C292.6 259.4 292.4 258.3 292.8 313.3L293.1 363H282.1H271V317.7C271 265 270.9 264.5 263.1 256.9C257.2 251.2 251.9 249.6 241 250.2C234.5 250.6 232.3 251.2 228.3 253.6C222.5 257.2 217.9 263 214.8 270.7C212.6 276.4 212.5 277.2 212.2 319.8L211.9 363H200.9H190V249Z"
                  className="fill-current"
                />
                <path
                  d="M749 259V155H760.5H772V248.5V342H800.5H829V352.5V363H789H749V259Z"
                  className="fill-current"
                />
                <path
                  d="M1701.3 362.299C1701.5 361.799 1723 312.999 1749 253.699C1775 194.499 1796.4 146.099 1796.5 146.199C1797 146.699 1889 361.999 1889 362.499C1889 362.799 1883.5 362.899 1876.8 362.799L1864.7 362.499L1852.6 333.299L1840.5 303.999H1795.5H1750.4L1738 333.499L1725.5 362.999H1713.2C1706.4 362.999 1701.1 362.699 1701.3 362.299ZM1830.8 280.999C1828.9 275.399 1796.3 198.999 1795.9 198.999C1795.4 198.999 1764 270.999 1760.4 280.399C1759.8 281.799 1763.2 281.999 1795.5 281.999C1818.1 281.999 1831 281.599 1830.8 280.999Z"
                  className="fill-current"
                />
                <path
                  d="M2417 298.001V233.001H2428H2439V240.601V248.301L2444.5 243.101C2464.2 224.501 2499.2 227.301 2512.7 248.601C2519.6 259.401 2519.4 258.301 2519.8 313.301L2520.1 363.001H2509.1H2498V317.701C2498 265.001 2497.9 264.501 2490.1 256.901C2484.2 251.201 2478.9 249.601 2468 250.201C2461.5 250.601 2459.3 251.201 2455.3 253.601C2449.5 257.201 2444.9 263.001 2441.8 270.701C2439.6 276.401 2439.5 277.201 2439.2 319.801L2438.9 363.001H2427.9H2417V298.001Z"
                  className="fill-current"
                />
                <path
                  d="M2626 308V253H2619.5H2613V243V233H2619.5H2626V209.5V186H2637H2648V209.5V233H2659.5H2671V243V253H2659.5H2648V308V363H2637H2626V308Z"
                  className="fill-current"
                />
              </svg>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#agencies"
                className="text-[var(--antiflash-white)] hover:text-[var(--forest)] font-medium"
              >
                Agencies
              </a>
              <a
                href="#value"
                className="text-[var(--antiflash-white)] hover:text-[var(--forest)] font-medium"
              >
                Value
              </a>
              <a
                href="#why-agents-partner"
                className="text-[var(--antiflash-white)] hover:text-[var(--forest)] font-medium"
              >
                Why Agents Partner
              </a>
              <a
                href="#pricing"
                className="text-[var(--antiflash-white)] hover:text-[var(--forest)] font-medium"
              >
                Pricing Plan
              </a>
            </nav>
            <Button
              onClick={openForm}
              className="bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-white rounded-full scale-110"
            >
              Book A Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left side - Dark content */}
          <div className="bg-[var(--penn-blue)] text-[var(--antiflash-white)] pt-16 flex items-center w-full">
            <div className="px-8 lg:px-16 py-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                Where agents
                <br />
                go to grow
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-[var(--forest)] mr-3 flex-shrink-0" />
                  <span className="text-lg">No lock-in contracts</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-[var(--forest)] mr-3 flex-shrink-0" />
                  <span className="text-lg">Month-to-month flexibility</span>
                </div>
              </div>

              <p className="text-xl text-yellow-400 mb-8 font-medium italic">
                We dial. You close.
              </p>

              <Button
                onClick={openForm}
                size="lg"
                className="bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-[var(--antiflash-white)] text-lg px-8 py-3 rounded-full"
              >
                Book a 2-Week Campaign
              </Button>
            </div>
          </div>

          {/* Right side - House image */}
          <div className="relative bg-[url('/house-model-1.png')] bg-center min-h-[600px]"></div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section id="agencies" className="py-12 bg-[var(--night)]">
        <p className="text-center text-[var(--antiflash-white)] mb-8 font-medium">
          Trusted by agencies
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-partners whitespace-nowrap">
            {/* First set of partners */}
            <div className="flex items-center gap-12 lg:gap-16 opacity-70 px-8">
              {/* Place logo style */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--antiflash-white)] rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold text-lg">
                    P
                  </span>
                </div>
                <span className="font-semibold text-[var(--antiflash-white)]">
                  Place.
                </span>
              </div>

              {/* Spectrum style */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  SPECTRUM
                </div>
                <div className="text-sm text-gray-300">ESTATE AGENTS</div>
              </div>

              {/* Remy's style */}
              <div className="font-serif text-[var(--antiflash-white)] text-xl flex-shrink-0">
                remy's
              </div>

              {/* Woolloongabba style */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg flex items-center">
                  <span className="mr-2">W</span>
                  <div className="border-l border-gray-400 pl-2">
                    <div className="text-sm">WOOLLOONGABBA</div>
                    <div className="text-sm">REAL ESTATE</div>
                  </div>
                </div>
              </div>

              {/* JJ Properties style */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--penn-blue)] flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold">JJ</span>
                </div>
                <span className="text-[var(--antiflash-white)] font-medium">
                  PROPERTIES
                </span>
              </div>

              {/* Metro Realty */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--forest)] rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold text-lg">
                    M
                  </span>
                </div>
                <span className="font-semibold text-[var(--antiflash-white)]">
                  METRO REALTY
                </span>
              </div>

              {/* Coastal Properties */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  COASTAL
                </div>
                <div className="text-sm text-gray-300">PROPERTIES</div>
              </div>

              {/* Elite Partners */}
              <div className="font-serif text-[var(--antiflash-white)] text-xl flex-shrink-0">
                Elite Partners
              </div>

              {/* Prestige Realty */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold">PR</span>
                </div>
                <span className="text-[var(--antiflash-white)] font-medium">
                  PRESTIGE
                </span>
              </div>

              {/* Summit Real Estate */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  SUMMIT
                </div>
                <div className="text-sm text-gray-300">REAL ESTATE</div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 lg:gap-16 opacity-70 px-8">
              {/* Place logo style */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--antiflash-white)] rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold text-lg">
                    P
                  </span>
                </div>
                <span className="font-semibold text-[var(--antiflash-white)]">
                  Place.
                </span>
              </div>

              {/* Spectrum style */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  SPECTRUM
                </div>
                <div className="text-sm text-gray-300">ESTATE AGENTS</div>
              </div>

              {/* Remy's style */}
              <div className="font-serif text-[var(--antiflash-white)] text-xl flex-shrink-0">
                remy's
              </div>

              {/* Woolloongabba style */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg flex items-center">
                  <span className="mr-2">W</span>
                  <div className="border-l border-gray-400 pl-2">
                    <div className="text-sm">WOOLLOONGABBA</div>
                    <div className="text-sm">REAL ESTATE</div>
                  </div>
                </div>
              </div>

              {/* JJ Properties style */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--penn-blue)] flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold">JJ</span>
                </div>
                <span className="text-[var(--antiflash-white)] font-medium">
                  PROPERTIES
                </span>
              </div>

              {/* Metro Realty */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[var(--forest)] rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold text-lg">
                    M
                  </span>
                </div>
                <span className="font-semibold text-[var(--antiflash-white)]">
                  METRO REALTY
                </span>
              </div>

              {/* Coastal Properties */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  COASTAL
                </div>
                <div className="text-sm text-gray-300">PROPERTIES</div>
              </div>

              {/* Elite Partners */}
              <div className="font-serif text-[var(--antiflash-white)] text-xl flex-shrink-0">
                Elite Partners
              </div>

              {/* Prestige Realty */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-[var(--night)] font-bold">PR</span>
                </div>
                <span className="text-[var(--antiflash-white)] font-medium">
                  PRESTIGE
                </span>
              </div>

              {/* Summit Real Estate */}
              <div className="text-center flex-shrink-0">
                <div className="font-bold text-[var(--antiflash-white)] text-lg">
                  SUMMIT
                </div>
                <div className="text-sm text-gray-300">REAL ESTATE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Dark Section */}
      <section
        id="value"
        className="py-20 bg-[var(--penn-blue)] text-[var(--antiflash-white)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Buy back your time & fill your pipeline
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Let's be real - you didn't get into real estate to sit behind a
              phone.
              <br />
              Your job is to list, negotiate, and close deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--antiflash-white)]/10 backdrop-blur-md rounded-lg p-6 text-center border border-[var(--antiflash-white)]/20 shadow-xl">
              <Clock className="h-12 w-12 text-[var(--forest)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--antiflash-white)] text-lg">
                Gain back 20 hrs a week
              </h3>
            </div>
            <div className="bg-[var(--antiflash-white)]/10 backdrop-blur-md rounded-lg p-6 text-center border border-[var(--antiflash-white)]/20 shadow-xl">
              <Calendar className="h-12 w-12 text-[var(--forest)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--antiflash-white)] text-lg">
                Qualified appraisals only
              </h3>
            </div>
            <div className="bg-[var(--antiflash-white)]/10 backdrop-blur-md rounded-lg p-6 text-center border border-[var(--antiflash-white)]/20 shadow-xl">
              <Target className="h-12 w-12 text-[var(--forest)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--antiflash-white)] text-lg">
                Territory exclusivity in 3-5 chosen suburbs
              </h3>
            </div>
            <div className="bg-[var(--antiflash-white)]/10 backdrop-blur-md rounded-lg p-6 text-center border border-[var(--antiflash-white)]/20 shadow-xl">
              <Shield className="h-12 w-12 text-[var(--forest)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--antiflash-white)] text-lg">
                No lock in contracts
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us - Light Section with Image */}
      <section id="why-agents-partner" className="py-20 bg-[var(--night)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - House image */}
            <div className="order-2 lg:order-1">
              <img
                src="/house-model-2.png"
                alt="Beautiful two-story house with for sale sign"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--antiflash-white)] mb-8">
                Why agents partner with us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      Built by agents, for agents
                    </h3>
                    <p className="text-gray-300">
                      We know how to win appraisal conversations because we've
                      been in your shoes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      100% Australian team
                    </h3>
                    <p className="text-gray-300">
                      No offshore scripts, just genuine local conversations
                      homeowners respond to.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      Face-to-face appraisal bookings, not cold leads
                    </h3>
                    <p className="text-gray-300">
                      Every appointment is confirmed, qualified, and locked into
                      your calendar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      Territory exclusivity
                    </h3>
                    <p className="text-gray-300">
                      Secure your 3-5 chosen suburbs and we'll never work with
                      another agent in your patch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      Pro-rata refund guarantee
                    </h3>
                    <p className="text-gray-300">
                      Only pay for what we deliver. Zero risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[var(--forest)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[var(--antiflash-white)] text-lg mb-2">
                      Month-to-month freedom
                    </h3>
                    <p className="text-gray-300">
                      No contracts, no long tie-ins, just consistent results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--penn-blue)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[500px] flex justify-center items-center">
            {testimonials.map((testimonial, index) => {
              const positions = [
                { x: -1800, scale: 0.4, opacity: 0.2, zIndex: 8 },
                { x: -1200, scale: 0.5, opacity: 0.3, zIndex: 9 },
                { x: -600, scale: 0.75, opacity: 0.7, zIndex: 11 },
                { x: 0, scale: 1, opacity: 1, zIndex: 13 },
                { x: 600, scale: 0.75, opacity: 0.7, zIndex: 11 },
                { x: 1200, scale: 0.5, opacity: 0.3, zIndex: 9 },
                { x: 1800, scale: 0.4, opacity: 0.2, zIndex: 8 },
              ];

              const relativeIndex =
                (index - currentIndex + testimonials.length) %
                testimonials.length;
              const centerIndex = Math.floor(positions.length / 2);
              const positionIndex =
                centerIndex +
                relativeIndex -
                Math.floor(testimonials.length / 2);

              let position;
              if (positionIndex < 0) {
                position = {
                  x: positions[0].x + positionIndex * 600,
                  scale: 0.3,
                  opacity: 0.1,
                  zIndex: 7,
                };
              } else if (positionIndex >= positions.length) {
                position = {
                  x:
                    positions[positions.length - 1].x +
                    (positionIndex - positions.length + 1) * 600,
                  scale: 0.3,
                  opacity: 0.1,
                  zIndex: 7,
                };
              } else {
                position = positions[positionIndex];
              }

              return (
                <div
                  key={testimonial.id}
                  className="absolute w-80 h-80 md:w-[400px] md:h-[400px] cursor-pointer transition-all duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(${position.x}px) scale(${position.scale})`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-lg backdrop-blur-md border border-white/20"
                    style={{
                      backgroundColor: "var(--forest)",
                      color: "#ffffff",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <div
                          className="flex items-center rounded-full px-2 py-1"
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        >
                          {testimonial.platform === "Google Maps" && (
                            <>
                              <div className="w-4 h-4 p-[1px] bg-white rounded-full flex items-center justify-center mr-1">
                                <img
                                  src="/g-maps.svg"
                                  width={50}
                                  height={50}
                                  alt=""
                                />
                              </div>
                              <span
                                className="text-xs"
                                style={{ color: "#ffffff" }}
                              >
                                Google Maps
                              </span>
                            </>
                          )}
                          {testimonial.platform === "LinkedIn" && (
                            <>
                              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mr-1">
                                <span className="text-white font-bold text-xs">
                                  in
                                </span>
                              </div>
                              <span
                                className="text-xs"
                                style={{ color: "#ffffff" }}
                              >
                                LinkedIn
                              </span>
                            </>
                          )}
                          {testimonial.platform === "Instagram" && (
                            <>
                              <div className="w-4 h-4 p-[2px] bg-white rounded flex items-center justify-center mr-1">
                                <img
                                  src="/instagram.svg"
                                  width={50}
                                  height={50}
                                  alt=""
                                />
                              </div>
                              <span
                                className="text-xs"
                                style={{ color: "#ffffff" }}
                              >
                                Instagram
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <p
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: "#ffffff" }}
                      >
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        >
                          <span
                            className="font-bold text-sm"
                            style={{ color: "#ffffff" }}
                          >
                            {testimonial.initials}
                          </span>
                        </div>
                        <div>
                          <p
                            className="font-bold text-sm"
                            style={{ color: "#ffffff" }}
                          >
                            {testimonial.name}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      >
                        Verified Review
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--antiflash-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--night)] mb-8">
                Common questions?
              </h2>
            </div>
            <div className="space-y-6 relative">
              {/* FAQ Item 1 */}
              <div className="relative">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--penn-blue)] rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[var(--night)] text-lg">
                      MY ASSOCIATE CAN DO THAT
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                      openFaq === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === 1 && (
                  /* Updated dropdown background from purple-pink gradient to navy blue with subtle orange accent */
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--penn-blue)] rounded-2xl p-6 shadow-2xl z-10 text-white border-l-4 border-[var(--forest)]">
                    <p className="text-sm leading-relaxed mb-4">
                      Sure, your associate might be able to make calls, but can
                      they consistently deliver 12+ qualified appraisals per
                      month? Our team has years of experience specifically in
                      real estate prospecting, with proven scripts and
                      techniques that convert.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Plus, when your associate is on the phone, they're not
                      helping you with listings, showings, or client management.
                      We free up your entire team to focus on what they do best
                      - closing deals.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="relative">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--penn-blue)] rounded-full flex items-center justify-center mr-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[var(--night)] text-lg">
                      IT'S A BIG INVESTMENT
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                      openFaq === 2 ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === 2 && (
                  /* Updated dropdown background from purple-pink gradient to navy blue with subtle orange accent */
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--penn-blue)] rounded-2xl p-6 shadow-2xl z-10 text-white border-l-4 border-[var(--forest)]">
                    <p className="text-sm leading-relaxed mb-4">
                      Let's break it down: Our Starter Campaign costs
                      $2,145/month and guarantees 12+ qualified appraisals. If
                      you close just ONE listing from those appraisals, you've
                      likely covered your investment and more.
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      Compare that to hiring a full-time prospector (salary +
                      benefits + training + management time), or the opportunity
                      cost of doing it yourself instead of focusing on
                      high-value activities.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Plus, we offer pro-rata refunds if we don't deliver. Zero
                      risk, maximum reward.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="relative">
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--penn-blue)] rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[var(--night)] text-lg">
                      I'LL JUST GET A VA OR DO IT MYSELF
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                      openFaq === 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === 3 && (
                  /* Updated dropdown background from purple-pink gradient to navy blue with subtle orange accent */
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--penn-blue)] rounded-2xl p-6 shadow-2xl z-10 text-white border-l-4 border-[var(--forest)]">
                    <p className="text-sm leading-relaxed mb-4">
                      VAs are great for admin tasks, but real estate prospecting
                      requires local market knowledge, cultural understanding,
                      and proven conversion techniques. Our Australian team
                      knows exactly how to speak to homeowners in your area.
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      As for doing it yourself - your time is worth $200-500+
                      per hour when you're listing and selling. Spending 20
                      hours a week on cold calls is costing you thousands in
                      opportunity.
                    </p>
                    <p className="text-sm leading-relaxed">
                      We handle the prospecting, you handle the closing. It's
                      that simple.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--forest)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-end">
            {/* Left side - House image */}
            <div className="absolute left-0 bottom-0">
              <img
                src="/house-model-3.png"
                alt="Modern house with contemporary design"
                className="w-lg h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 text-white text-end pb-60 md:pb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Only 1 agent per patch (3-5 suburbs, depending on Campaign)
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Once your suburbs are locked in, we work with no one else in
                that area.
              </p>
              <Button
                onClick={openForm}
                size="lg"
                className="bg-[var(--night)] hover:bg-[var(--night)]/90 text-white px-8 py-3 text-lg"
              >
                Book Growth Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[var(--night)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pick Your Growth Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-gray-800 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">
                  STARTER CAMPAIGN
                </CardTitle>
                <div className="font-bold flex flex-col py-4 rounded-lg bg-black/20 text-white">
                  <h3>$2,145/Mo</h3>
                  <CardDescription className="text-gray-300">
                    (GST included)
                  </CardDescription>
                  <p className="text-sm text-gray-400">
                    Perfect for solo agents building consistency
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-[var(--forest)] font-semibold mb-3">
                    Features
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      12+ pre-qualified appraisal appointments per month —
                      guaranteed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      SMS confirmation for every appointment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Weekly performance reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      CRM data entry done for you
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Custom scripts tailored to your tone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Territory exclusivity in up to 3 suburbs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Australian agents who know our market.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      No lock-in contracts—month-to-month flexibility
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={openForm}
                  className="w-full mt-6 bg-gray-700 hover:bg-gray-300 text-white border border-gray-300"
                >
                  Book Growth Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-gradient-to-br from-[var(--forest)] to-[var(--forest)]/80 text-white relative transform scale-105 z-10">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-[var(--forest)] font-bold">
                MOST POPULAR
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">
                  GROWTH CAMPAIGN
                </CardTitle>
                <div className="font-bold flex flex-col py-4 rounded-lg bg-black/20 text-white">
                  <h3>$3,520/Mo</h3>
                  <CardDescription className="text-white/80">
                    (GST included)
                  </CardDescription>
                  <p className="text-sm text-white/90">
                    Ideal for agents scaling quickly
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Features</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      20+ pre-qualified appraisal appointments per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Daily CRM tagging & notes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      SMS confirmation for every appointment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Follow-up SMS per lead
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Weekly strategy & performance reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Advanced seller qualification filters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Territory exclusivity in up to 4 suburbs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Australian agents who know our market.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      No lock-in contracts—month-to-month flexibility
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={openForm}
                  className="w-full mt-6 bg-white hover:bg-gray-100 text-[var(--forest)] font-bold animate-pulse"
                >
                  Book Growth Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gray-800 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">
                  ELITE CAMPAIGN
                </CardTitle>
                <div className="font-bold flex flex-col py-4 rounded-lg bg-black/20 text-white">
                  <h3>$6,380/Mo</h3>
                  <CardDescription className="text-gray-300">
                    (GST included)
                  </CardDescription>
                  <p className="text-sm text-gray-400">
                    Built for top producers ready to dominate
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-[var(--forest)] font-semibold mb-3">
                    Features
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      40+ pre-qualified appraisal appointments per month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Full CRM management integration, updates, tagging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      SMS confirmation for every appointment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Follow-up SMS per lead
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Weekly strategy & performance reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Advanced seller qualification filters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Territory exclusivity in up to 5 suburbs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      Australian agents who know our market.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">
                      No lock-in contracts—month-to-month flexibility
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={openForm}
                  className="w-full mt-6 bg-gray-700 hover:bg-gray-300 text-white border border-gray-300"
                >
                  Book Growth Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Slab Pricing Section */}
      <section className="py-20 bg-[var(--night)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--penn-blue)] text-[var(--antiflash-white)] border-[var(--penn-blue)]">
              Optional Add-On
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--antiflash-white)] mb-4">
              Data Slab Pricing
            </h2>
            <p className="text-lg text-gray-300">
              Enhance your campaign with exclusive, suburb-targeted property
              data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 1,000 Records Card */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-black/20 text-white text-center py-4">
                <CardTitle className="text-white text-lg font-bold">
                  1,000 RECORDS
                </CardTitle>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="text-3xl font-bold text-[var(--night)]">
                  $400
                </div>
                <CardDescription className="text-gray-600">
                  (GST included)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Suburb-targeted
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Mobile numbers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Exclusive use</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      CoreLogic-sourced
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Cold-call ready
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 2,500 Records Card */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-black/20 text-white text-center py-4">
                <CardTitle className="text-white text-lg font-bold">
                  2,500 RECORDS
                </CardTitle>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="text-3xl font-bold text-[var(--night)]">
                  $500
                </div>
                <CardDescription className="text-gray-600">
                  (GST included)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Suburb-targeted
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Mobile numbers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Exclusive use</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      CoreLogic-sourced
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Cold-call ready
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4,000 Records Card - Highlighted */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-[var(--penn-blue)] text-white text-center py-4">
                <CardTitle className="text-white text-lg font-bold">
                  4,000 RECORDS
                </CardTitle>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="text-3xl font-bold text-[var(--night)]">
                  $600
                </div>
                <CardDescription className="text-gray-600">
                  (GST included)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Suburb-targeted
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Mobile numbers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Exclusive use</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      CoreLogic-sourced
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-[var(--penn-blue)] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Cold-call ready
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              className="bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-white px-8 py-3 rounded-full shadow-lg"
            >
              Add Data Slabs to My Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Section - Updated to match reference */}
      <section className="relative">
        <div className="flex flex-col md:flex-row min-h-[200px]">
          {/* Left side - House image */}
          <div className="relative">
            <img
              src="/house-model-4.png"
              alt="Beautiful two-story house"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Guarantee content */}
          <div className="bg-[var(--penn-blue)] text-[var(--antiflash-white)] w-full flex items-center">
            <div className="px-8 lg:px-16 py-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Guarantee
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                We guarantee your minimum appraisals — or we refund you.
                <br />
                And because we have no lock-in contracts, you get month-to-month
                flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to See Section - Updated to match reference */}
      <section className="py-20 bg-[var(--antiflash-white)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--night)] mb-12">
            Ready to see how it works in your patch?
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--penn-blue)] rounded-full flex items-center justify-center mr-4">
                <Check className="h-4 w-4 text-[var(--antiflash-white)]" />
              </div>
              <span className="text-lg text-[var(--night)]">
                Start with a 2-week Pilot Campaign — risk-free, no contracts.
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-[var(--penn-blue)] rounded-full flex items-center justify-center mr-4">
                <Check className="h-4 w-4 text-[var(--antiflash-white)]" />
              </div>
              <span className="text-lg text-[var(--night)]">
                We'll prospect, tag leads, and book straight into your calendar.
              </span>
            </div>
          </div>

          <p className="text-xl text-[var(--night)] mb-8 font-medium">
            <span className="mr-2">👉</span>
            <em>We dial. You close.</em>
          </p>

          <Button
            onClick={openForm}
            size="lg"
            className="bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-[var(--antiflash-white)] text-lg px-8 py-3 rounded-full"
          >
            Book Your Pilot Campaign →
          </Button>
        </div>
      </section>

      {/* Footer - Updated to match reference */}
      <footer className="bg-[#E7E7E7] border-t border-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center">
                <svg
                  className="h-9 md:h-10 text-[var(--night)]"
                  viewBox="0 0 3257 572"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2761.37 571.7C2761.37 571.475 2762.05 570.199 2762.8 568.848C2763.62 567.497 2767 559.844 2770.3 551.964C2773.68 544.01 2777.36 535.531 2778.56 533.205C2779.76 530.803 2783.51 522.249 2786.89 514.22C2790.26 506.191 2793.34 499.287 2793.64 498.837C2793.94 498.462 2797.02 491.483 2800.39 483.454C2803.77 475.425 2807.67 466.495 2809.1 463.569C2810.45 460.717 2814.5 451.712 2817.95 443.683C2829.28 417.27 2839.26 394.608 2840.76 391.531C2841.59 389.88 2845.04 382.001 2848.42 373.972C2851.79 365.943 2855.02 358.739 2855.55 357.839C2856.07 356.938 2859.15 350.035 2862.3 342.381C2865.53 334.727 2869.05 326.623 2870.18 324.371C2871.31 322.12 2874.98 313.641 2878.43 305.612C2881.81 297.582 2884.96 290.304 2885.49 289.478C2886.01 288.653 2889.09 281.749 2892.32 274.095C2895.47 266.441 2899.22 257.887 2900.65 254.96C2903.12 249.933 2908.3 238.002 2923.91 201.758C2927.81 192.678 2931.34 184.874 2931.64 184.499C2932.01 184.049 2934.94 177.445 2938.09 169.791C2941.32 162.137 2944.84 154.033 2945.97 151.782C2947.09 149.531 2950.77 141.051 2954.22 133.022C2957.6 124.993 2961.2 116.739 2962.25 114.638C2963.3 112.611 2966.75 104.582 2970.06 96.8533C2973.28 89.1243 2976.96 80.87 2978.16 78.4688C2979.36 76.0675 2982.44 69.0889 2984.99 62.8607C2987.62 56.7075 2991.14 48.6033 2992.87 44.8513C2994.67 41.1744 2998.27 32.8451 3000.97 26.4668C3003.67 20.0885 3007.28 11.9843 3008.93 8.53248C3010.65 5.00565 3012 1.62889 3012 1.02858C3012.08 0.353229 3012.68 1.32874 3013.5 3.20471C3014.25 5.08068 3016.81 10.9337 3019.13 16.3365C3021.46 21.7393 3026.56 33.5204 3030.39 42.6002C3034.21 51.6799 3039.02 63.0107 3041.12 67.7382C3045.55 78.0185 3051.17 91.3004 3059.73 111.636C3063.18 119.89 3067.01 128.67 3068.21 131.146C3069.41 133.622 3073.16 142.402 3076.54 150.656C3079.91 158.91 3083.52 167.165 3084.42 169.041C3085.32 170.917 3088.39 177.97 3091.17 184.799C3093.95 191.627 3097.4 199.732 3098.82 202.808C3100.25 205.885 3104.15 215.04 3107.45 223.069C3110.75 231.098 3113.76 238.077 3114.06 238.452C3114.43 238.902 3117.88 247.006 3121.86 256.461C3125.76 265.991 3129.66 275.146 3130.49 276.872C3131.31 278.598 3134.77 286.702 3138.14 294.881C3141.52 303.06 3144.52 310.114 3144.82 310.489C3145.2 310.939 3148.35 318.218 3151.8 326.623C3155.25 335.102 3159.3 344.557 3160.81 347.633C3162.23 350.71 3166.06 359.715 3169.28 367.519C3172.44 375.398 3175.51 382.451 3176.04 383.277C3176.56 384.102 3179.72 391.456 3183.02 399.635C3186.39 407.815 3189.77 415.844 3190.6 417.42C3191.42 419.07 3194.87 427.025 3198.17 435.204C3201.55 443.383 3205 451.412 3205.83 453.063C3206.65 454.714 3210.48 463.494 3214.31 472.573C3218.06 481.653 3224.14 495.985 3227.66 504.465C3231.27 512.944 3235.62 523.074 3237.42 526.976C3239.22 530.878 3242.52 538.532 3244.62 543.86C3246.8 549.263 3250.4 557.592 3252.58 562.395C3254.83 567.197 3256.63 571.324 3256.63 571.625C3256.63 571.85 3241.7 571.925 3223.46 571.85L3190.3 571.625L3183.24 554.366C3179.41 544.911 3173.04 529.528 3169.21 520.223C3165.38 510.918 3159 495.385 3155.03 485.705C3151.05 476.025 3147 466.345 3145.95 464.244C3144.97 462.068 3141.45 453.663 3138.14 445.484C3134.84 437.23 3130.71 427.325 3128.99 423.423C3125.16 414.643 3116.76 394.533 3108.35 373.522C3104.83 364.892 3100.85 355.212 3099.42 352.136C3098 349.059 3094.47 340.43 3091.54 333.001C3088.62 325.572 3085.77 318.818 3085.24 317.993C3084.72 317.168 3081.11 308.763 3077.29 299.233C3073.46 289.778 3070.08 281.674 3069.78 281.224C3069.48 280.849 3065.96 272.369 3061.9 262.464C3057.85 252.559 3054.33 244.155 3054.02 243.704C3053.72 243.329 3050.35 235.225 3046.52 225.695C3042.69 216.24 3039.32 208.061 3039.02 207.686C3038.64 207.236 3035.49 199.657 3031.89 190.802C3028.29 181.947 3024.53 173.018 3023.56 170.917C3022.51 168.891 3019.43 161.462 3016.66 154.558C3013.88 147.58 3011.33 141.877 3011.03 141.952C3010.13 141.952 3005.77 151.332 2998.2 169.416C2987.99 193.729 2983.56 204.159 2979.59 213.314C2977.49 218.041 2972.83 229.147 2969.23 237.851C2965.55 246.631 2961.73 255.561 2960.68 257.737C2959.63 259.913 2955.8 268.617 2952.27 277.097C2934.41 319.644 2931.86 325.722 2930.59 328.123C2929.84 329.549 2926.08 338.329 2922.26 347.633C2909.95 377.574 2900.42 400.461 2899.22 402.787C2898.62 404.063 2895.47 411.492 2892.32 419.296C2889.09 427.175 2885.71 435.054 2884.81 436.93C2883.84 438.806 2880.69 446.31 2877.76 453.663C2874.83 460.942 2870.93 470.247 2869.13 474.299C2867.25 478.276 2863.43 487.431 2860.5 494.56C2857.57 501.688 2854.5 508.817 2853.75 510.393C2852.92 511.969 2849.99 518.797 2847.29 525.551C2844.52 532.304 2840.46 541.759 2838.36 546.487C2836.19 551.214 2832.89 558.943 2831.08 563.52L2827.78 572H2794.62C2776.31 572 2761.37 571.85 2761.37 571.7Z"
                    className="fill-current"
                  />
                  <path
                    d="M2025.2 433.9C2004.7 431.9 1986.9 420.6 1978 403.8C1974.7 397.7 1971 384.7 1971 379.3V376H1981.5C1987.3 376 1992 376.3 1992 376.8C1992 377.2 1992.7 380.6 1993.5 384.3C1996.2 397.1 2003.5 406.5 2014.8 411.8C2020.1 414.3 2021.4 414.5 2034 414.5C2049.6 414.4 2053.6 413.2 2061.5 405.9C2072 396.2 2075.1 386.9 2075.8 362.5L2076.3 344.6L2069.2 351.1C2057.6 361.9 2045.9 366.4 2030 366.2C2012.9 366.1 1999.6 360.7 1987.9 349C1974.6 335.9 1968.9 320.2 1968.9 297.5C1968.9 276 1974.2 261.7 1987 248.9C1999.1 236.6 2013.2 230.9 2031 230.9C2047.4 230.9 2057.5 234.8 2069.2 245.9L2076 252.2V242.6V233H2087H2098V297.3C2098 368.4 2097.3 381.7 2093.6 393.6C2084.7 421.3 2058 437.1 2025.2 433.9ZM2051.5 343.7C2066.5 336.7 2075.7 321.3 2076.7 301.5C2077.8 279.1 2068.8 261.5 2052 253.6C2045.9 250.7 2044.8 250.5 2034 250.5C2023.2 250.5 2022.1 250.7 2015.9 253.6C2003.7 259.4 1994.7 271.4 1992 285.8C1990.1 295.2 1991.2 311 1994.2 319.1C1998.8 331.5 2007.8 340.9 2019.2 345.1C2023.5 346.7 2026.5 347 2035 346.7C2044 346.5 2046.4 346 2051.5 343.7Z"
                    className="fill-current"
                  />
                  <path
                    d="M442.8 365.9C425.5 364 409.4 355 400.4 342.4C391.5 329.9 387.9 317.6 387.9 299C387.9 276.8 393.7 261.3 407 247.9C419 235.7 431.3 230.9 450 230.9C485.8 230.9 507.2 253.2 510.6 293.8L511.3 302H460.6H410V305.8C410 307.9 410.7 312.2 411.5 315.3C415 328.6 422.4 337.9 433.8 343.3C440.1 346.3 441.2 346.5 452 346.5C462.7 346.5 463.9 346.3 469.5 343.6C476.1 340.4 486.3 330.8 489.5 324.7C490.6 322.7 491.8 321 492.3 321C493.2 321 507.1 328.8 508.4 330C509.8 331.4 503.9 340.3 496.1 348.1C482.2 362 463.5 368.3 442.8 365.9ZM487.5 280.3C486.5 274.6 481.3 265.3 476.6 260.6C474.3 258.3 469.7 255 466.4 253.4C461 250.8 459.6 250.5 450 250.5C440.5 250.5 438.9 250.8 433.8 253.3C423.6 258.3 415.9 267.6 412.6 278.8L411.1 284H449.7H488.2L487.5 280.3Z"
                    className="fill-current"
                  />
                  <path
                    d="M964.8 365.9C947.5 364 931.4 355 922.4 342.4C913.5 329.9 909.9 317.6 909.9 299C909.9 276.8 915.7 261.3 929 247.9C941 235.7 953.3 230.9 972 230.9C1007.8 230.9 1029.2 253.2 1032.6 293.8L1033.3 302H982.6H932V305.8C932 307.9 932.7 312.2 933.5 315.3C937 328.6 944.4 337.9 955.8 343.3C962.1 346.3 963.2 346.5 974 346.5C984.7 346.5 985.9 346.3 991.5 343.6C998.1 340.4 1008.3 330.8 1011.5 324.7C1012.6 322.7 1013.8 321 1014.3 321C1015.2 321 1029.1 328.8 1030.4 330C1031.8 331.4 1025.9 340.3 1018.1 348.1C1004.2 362 985.5 368.3 964.8 365.9ZM1009.5 280.3C1008.5 274.6 1003.3 265.3 998.6 260.6C996.3 258.3 991.7 255 988.4 253.4C983 250.8 981.6 250.5 972 250.5C962.5 250.5 960.9 250.8 955.8 253.3C945.6 258.3 937.9 267.6 934.6 278.8L933.1 284H971.7H1010.2L1009.5 280.3Z"
                    className="fill-current"
                  />
                  <path
                    d="M1177.5 366C1162.9 364.2 1151.7 358.8 1141.3 348.4C1128.6 335.6 1122.9 319.9 1122.9 297.5C1122.9 275.7 1128.3 261.7 1141.5 248.5C1153.9 236 1166.9 230.8 1185 230.9C1201.5 230.9 1213.3 235.6 1224 246.3L1230 252.3V243.2V234H1241H1252V298.5V363H1241H1230V353.9V344.8L1223.1 351.2C1210.3 363 1194.7 368.1 1177.5 366ZM1206.1 343.3C1221.8 335.5 1231 318.8 1231 298C1231 282.4 1226 269.9 1215.9 260.5C1208.1 253.4 1201.4 250.8 1189 250.3C1181.3 249.9 1178.4 250.2 1173.8 251.9C1155.2 258.4 1145.1 274.7 1145 298.1C1145 317.5 1152.9 334.2 1165.7 341.7C1173.1 346 1177.6 347 1189 346.7C1198.6 346.5 1200.2 346.2 1206.1 343.3Z"
                    className="fill-current"
                  />
                  <path
                    d="M1404.5 366C1389.9 364.2 1378.7 358.8 1368.3 348.4C1355.6 335.6 1349.9 319.9 1349.9 297.5C1349.9 275.7 1355.3 261.7 1368.5 248.5C1380.9 236 1393.9 230.8 1412 230.9C1428.5 230.9 1440.3 235.6 1451 246.3L1457 252.3V193.7V135H1468H1479V249V363H1468H1457V353.9V344.8L1450.1 351.2C1437.3 363 1421.7 368.1 1404.5 366ZM1433.1 343.3C1448.8 335.5 1458 318.8 1458 298C1458 282.4 1453 269.9 1442.9 260.5C1435.1 253.4 1428.4 250.8 1416 250.3C1408.3 249.9 1405.4 250.2 1400.8 251.9C1382.2 258.4 1372.1 274.7 1372 298.1C1372 317.5 1379.9 334.2 1392.7 341.7C1400.1 346 1404.6 347 1416 346.7C1425.6 346.5 1427.2 346.2 1433.1 343.3Z"
                    className="fill-current"
                  />
                  <path
                    d="M2250.8 365.9C2233.5 364 2217.4 355 2208.4 342.4C2199.5 329.9 2195.9 317.6 2195.9 299C2195.9 276.8 2201.7 261.3 2215 247.9C2227 235.7 2239.3 230.9 2258 230.9C2293.8 230.9 2315.2 253.2 2318.6 293.8L2319.3 302H2268.6H2218V305.8C2218 307.9 2218.7 312.2 2219.5 315.3C2223 328.6 2230.4 337.9 2241.8 343.3C2248.1 346.3 2249.2 346.5 2260 346.5C2270.7 346.5 2271.9 346.3 2277.5 343.6C2284.1 340.4 2294.3 330.8 2297.5 324.7C2298.6 322.7 2299.8 321 2300.3 321C2301.2 321 2315.1 328.8 2316.4 330C2317.8 331.4 2311.9 340.3 2304.1 348.1C2290.2 362 2271.5 368.3 2250.8 365.9ZM2295.5 280.3C2294.5 274.6 2289.3 265.3 2284.6 260.6C2282.3 258.3 2277.7 255 2274.4 253.4C2269 250.8 2267.6 250.5 2258 250.5C2248.5 250.5 2246.9 250.8 2241.8 253.3C2231.6 258.3 2223.9 267.6 2220.6 278.8L2219.1 284H2257.7H2296.2L2295.5 280.3Z"
                    className="fill-current"
                  />
                  <path
                    d="M50 269.5V176H25H0V165.5V155H61.5H123V165.5V176H98H73V269.5V363H61.5H50V269.5Z"
                    className="fill-current"
                  />
                  <path
                    d="M190 249V135H201H212V191.6V248.3L217.5 243.1C237.2 224.5 272.2 227.3 285.7 248.6C292.6 259.4 292.4 258.3 292.8 313.3L293.1 363H282.1H271V317.7C271 265 270.9 264.5 263.1 256.9C257.2 251.2 251.9 249.6 241 250.2C234.5 250.6 232.3 251.2 228.3 253.6C222.5 257.2 217.9 263 214.8 270.7C212.6 276.4 212.5 277.2 212.2 319.8L211.9 363H200.9H190V249Z"
                    className="fill-current"
                  />
                  <path
                    d="M749 259V155H760.5H772V248.5V342H800.5H829V352.5V363H789H749V259Z"
                    className="fill-current"
                  />
                  <path
                    d="M1701.3 362.299C1701.5 361.799 1723 312.999 1749 253.699C1775 194.499 1796.4 146.099 1796.5 146.199C1797 146.699 1889 361.999 1889 362.499C1889 362.799 1883.5 362.899 1876.8 362.799L1864.7 362.499L1852.6 333.299L1840.5 303.999H1795.5H1750.4L1738 333.499L1725.5 362.999H1713.2C1706.4 362.999 1701.1 362.699 1701.3 362.299ZM1830.8 280.999C1828.9 275.399 1796.3 198.999 1795.9 198.999C1795.4 198.999 1764 270.999 1760.4 280.399C1759.8 281.799 1763.2 281.999 1795.5 281.999C1818.1 281.999 1831 281.599 1830.8 280.999Z"
                    className="fill-current"
                  />
                  <path
                    d="M2417 298.001V233.001H2428H2439V240.601V248.301L2444.5 243.101C2464.2 224.501 2499.2 227.301 2512.7 248.601C2519.6 259.401 2519.4 258.301 2519.8 313.301L2520.1 363.001H2509.1H2498V317.701C2498 265.001 2497.9 264.501 2490.1 256.901C2484.2 251.201 2478.9 249.601 2468 250.201C2461.5 250.601 2459.3 251.201 2455.3 253.601C2449.5 257.201 2444.9 263.001 2441.8 270.701C2439.6 276.401 2439.5 277.201 2439.2 319.801L2438.9 363.001H2427.9H2417V298.001Z"
                    className="fill-current"
                  />
                  <path
                    d="M2626 308V253H2619.5H2613V243V233H2619.5H2626V209.5V186H2637H2648V209.5V233H2659.5H2671V243V253H2659.5H2648V308V363H2637H2626V308Z"
                    className="fill-current"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © 2025 The Lead Agent. All rights reserved.
              </p>
              <p className="text-sm text-gray-600">
                ABN 45 797 666 536 • Brisbane / Gold Coast • 100% Local Team
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Guarantee Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={openForm}
          className="bg-[var(--penn-blue)] hover:bg-[var(--forest)] text-[var(--antiflash-white)] px-3 py-5 border-l border-[var(--forest)] rounded-l-lg shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="whitespace-nowrap text-sm font-semibold">
            Refund Guarantee
          </div>
        </button>
      </div>

      {/* Desktop Modal */}
      <Dialog
        open={isFormOpen && window.innerWidth >= 768}
        onOpenChange={setIsFormOpen}
      >
        <DialogContent className="sm:max-w-md bg-[var(--antiflash-white)]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[var(--night)] text-center">
              Book Your Growth Call
            </DialogTitle>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>

      {/* Mobile Drawer */}
      <Drawer
        open={isFormOpen && window.innerWidth < 768}
        onOpenChange={setIsFormOpen}
      >
        <DrawerContent className="bg-[var(--antiflash-white)]">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-[var(--night)] text-center">
              Book Your Growth Call
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <FormContent />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

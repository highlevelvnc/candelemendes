export default function Logo({
  variant = "dark",
  size = 44,
}: {
  variant?: "dark" | "light";
  size?: number;
}) {
  const ring = variant === "dark" ? "#0D384C" : "#FFFFFF";
  const fill = variant === "dark" ? "#0D384C" : "#0D384C";
  const bg = variant === "dark" ? "#F2B705" : "#F2B705";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Candele & Mendes"
    >
      {/* outer ring */}
      <circle cx="32" cy="32" r="30" fill={bg} stroke={ring} strokeWidth="3" />
      {/* hard hat top arc */}
      <path
        d="M16 22 Q32 6 48 22 L48 24 L16 24 Z"
        fill={fill}
        opacity="0.92"
      />
      <rect x="14" y="24" width="36" height="3" rx="1.5" fill={fill} />
      {/* C & M monogram */}
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="800"
        fontSize="18"
        fill={fill}
        letterSpacing="-0.5"
      >
        C&amp;M
      </text>
      {/* broom under */}
      <rect x="20" y="52" width="24" height="4" rx="1" fill={fill} />
      <rect x="22" y="55" width="20" height="3" fill={fill} opacity="0.6" />
    </svg>
  );
}

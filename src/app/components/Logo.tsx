import image_logo from '@/imports/logo.png'
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={image_logo}
      alt="Startup logo"
      className={className}
    />
  );
}

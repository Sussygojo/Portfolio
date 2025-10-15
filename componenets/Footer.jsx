function getYear() {
  return new Date().getFullYear();
}
export default function Footer() {
  // get current year

  return (
    <div className="text-center mx-auto py-6 opacity-50">
      <span>© {getYear()} Nikhil. All rights reserved.</span>
    </div>
  );
}

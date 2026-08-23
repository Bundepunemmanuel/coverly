/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // wallboard-calculator has virtually no distinct long-tail search
        // volume beyond the bare head term (see keyword research) — not
        // enough to justify a third near-duplicate page alongside drywall
        // and sheetrock, so we fold it into the drywall page instead.
        source: "/wallboard-calculator",
        destination: "/drywall-calculator",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

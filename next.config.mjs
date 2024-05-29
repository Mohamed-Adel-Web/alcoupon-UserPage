import MillionLint from '@million/lint';
// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["coupon.kyanlabs.com"]
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);
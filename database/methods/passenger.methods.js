async function generateOTP() {
  const OTP = Math.floor(1000 + Math.random() * 9000);

  this.resetOTP = OTP;
  this.resetOTPExpiration = Date.now() + 10 * 60 * 1000;

  return OTP;
}

module.exports = {
  generateOTP,
};

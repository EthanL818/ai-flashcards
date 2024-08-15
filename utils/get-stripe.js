import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

// Ensures we only create one instance of Stripe, reusing it if it already exists
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  }

  return stripePromise;
};

export default getStripe;

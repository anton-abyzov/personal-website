// This file would be deployed to Vercel/Netlify Functions
// It's the ONLY place where your Stripe secret key should be

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // CORS headers for your GitHub Pages site
  res.setHeader('Access-Control-Allow-Origin', 'https://antonabyzov.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, description } = req.body;
    
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: description || 'Support Anton Abyzov',
            description: 'Technology consulting and mentorship',
          },
          unit_amount: amount || 2500, // Default $25
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://antonabyzov.com/?payment=success',
      cancel_url: 'https://antonabyzov.com/?payment=cancelled',
      metadata: {
        source: 'personal-website'
      }
    });
    
    // Return checkout URL
    res.status(200).json({ 
      url: session.url,
      sessionId: session.id 
    });
    
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ 
      error: 'Payment initialization failed',
      message: error.message 
    });
  }
};
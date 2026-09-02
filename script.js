const stripe = Stripe('pk_test_your_stripe_key');

document.getElementById('payment-btn').addEventListener('click', async () => {
    const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1400 })
    });
    
    const data = await response.json();
    const { error } = await stripe.confirmCardPayment(data.clientSecret);
    
    if (error) {
        alert('Erreur: ' + error.message);
    } else {
        alert('✅ Paiement réussi! Bienvenue sur Sturdy Octo Journey!');
    }
});
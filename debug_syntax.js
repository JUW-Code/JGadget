const req = { body: { items: [] } };

try {
    const order = { id: `ORD-${Date.now()}`, ...req.body, status: 'pending' };
    console.log('Success:', order);
} catch (e) {
    console.error('Error:', e);
}

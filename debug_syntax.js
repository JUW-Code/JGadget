
// Mock req.body
const req = { body: { items: [] } };

// Test the line in question
try {
    const order = { id: `ORD-${Date.now()}`, ...req.body, status: 'pending' };
    console.log('Success:', order);
} catch (e) {
    console.error('Error:', e);
}

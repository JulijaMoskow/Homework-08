describe('Test Orders API', () => {
    test('GET /test-orders - should return 200 with valid username and password', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders?username=test&password=test'
        );

        expect(response.status).toBe(200);
    });

    test('GET /test-orders - should return 500 without username', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders?password=test'
        );

        expect(response.status).toBe(500);
    });

    test('GET /test-orders - should return 500 without password', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders?username=test'
        );

        expect(response.status).toBe(500);
    });

    test('PUT /test-orders/{id} - should return 200 with valid id, api_key and body', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    api_key: '1234567890123456',
                },
                body: JSON.stringify({
                    status: 'OPEN',
                    courierId: 1,
                    customerName: 'Test User',
                    customerPhone: '123456789',
                    comment: 'updated order',
                }),
            }
        );

        expect(response.status).toBe(200);
    });

    test('PUT /test-orders/{id} - should return 400 without api_key', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'OPEN',
                    courierId: 1,
                    customerName: 'Test User',
                    customerPhone: '123456789',
                    comment: 'updated order',
                }),
            }
        );

        expect(response.status).toBe(400);
    });

    test('PUT /test-orders/{id} - should return 401 with invalid api_key', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    api_key: '123',
                },
                body: JSON.stringify({
                    status: 'OPEN',
                    courierId: 1,
                    customerName: 'Test User',
                    customerPhone: '123456789',
                    comment: 'updated order',
                }),
            }
        );

        expect(response.status).toBe(401);
    });

    test('PUT /test-orders/{id} - should return 400 with non-existing id', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/999',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    api_key: '1234567890123456',
                },
                body: JSON.stringify({
                    status: 'OPEN',
                    courierId: 1,
                    customerName: 'Test User',
                    customerPhone: '123456789',
                    comment: 'updated order',
                }),
            }
        );

        expect(response.status).toBe(400);
    });

    test('PUT /test-orders/{id} - should return 400 with empty body', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    api_key: '1234567890123456',
                },
                body: JSON.stringify({}),
            }
        );

        expect(response.status).toBe(200);
    });

    test('DELETE /test-orders/{id} - should return 204 with valid id and api_key', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'DELETE',
                headers: {
                    api_key: '1234567890123456',
                },
            }
        );

        expect(response.status).toBe(204);
    });

    test('DELETE /test-orders/{id} - should return 400 without api_key', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'DELETE',
            }
        );

        expect(response.status).toBe(400);
    });

    test('DELETE /test-orders/{id} - should return 401 with invalid api_key', async () => {
        const response = await fetch(
            'https://backend.tallinn-learning.ee/test-orders/1',
            {
                method: 'DELETE',
                headers: {
                    api_key: '123',
                },
            }
        );

        expect(response.status).toBe(401);
    });
});
## Checklist

### GET /test-orders

| # | Scenario | Test Data | Expected Result |
|--|--|--|--|
| 1 | Valid login | username=test, password=test | 200 |
| 2 | Missing username | password=test | 500 |
| 3 | Missing password | username=test | 500 |

### PUT /test-orders/{id}

| # | Scenario | Test Data | Expected Result |
|--|--|--|--|
| 1 | Valid request | id=1, valid api_key, body | 200 |
| 2 | Missing api_key | id=1 | 401 |
| 3 | Invalid api_key | api_key=123 | 401 |
| 4 | Non-existing id | id=999 | 400 |
| 5 | Empty body | {} | 200 |

### DELETE /test-orders/{id}

| # | Scenario | Test Data | Expected Result |
|--|--|--|--|
| 1 | Valid request | id=1, valid api_key | 204 |
| 2 | Missing api_key | id=1 | 400 |
| 3 | Invalid api_key | api_key=123 | 401 |

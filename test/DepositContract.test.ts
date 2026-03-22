import { DepositContract } from '../src/DepositContract';

describe('DepositContract', () => {
    let contract: DepositContract;

    beforeEach(() => {
        contract = new DepositContract('D-1', 'Bob', true, 10000, 5);
    });

    afterEach(() => {
        contract.deactivate();
    });

    test('should save all fields correctly', () => {
        expect(contract.contractId).toBe('D-1');
        expect(contract.clientName).toBe('Bob');
        expect(contract.isActive).toBe(true);
        expect(contract.amount).toBe(10000);
        expect(contract.interestRate).toBe(5);
    });

    test('should activate the contract', () => {
        contract.deactivate();
        contract.activate();
        expect(contract.isActive).toBe(true);
    });

    test('should deactivate the contract', () => {
        contract.deactivate();
        expect(contract.isActive).toBe(false);
    });

    test('should calculate interest correctly', () => {
        expect(contract.calculateInterest()).toBe(500);
    });
});
import { LoanContract } from '../src/LoanContract';

describe('LoanContract', () => {
    let contract: LoanContract;

    beforeEach(() => {
        contract = new LoanContract('L-1', 'Charlie', true, 50000, 2000, 24);
    });

    afterEach(() => {
        contract.deactivate();
    });

    test('should save all fields correctly', () => {
        expect(contract.contractId).toBe('L-1');
        expect(contract.clientName).toBe('Charlie');
        expect(contract.isActive).toBe(true);
        expect(contract.loanAmount).toBe(50000);
        expect(contract.monthlyPayment).toBe(2000);
        expect(contract.loanTermMonths).toBe(24);
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

    test('should calculate total payment correctly', () => {
        expect(contract.calculateTotalPayment()).toBe(48000);
    });
});
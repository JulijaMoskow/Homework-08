import { InsuranceContract } from '../src/InsuranceContract';

describe('InsuranceContract', () => {
    let contract: InsuranceContract;

    beforeEach(() => {
        contract = new InsuranceContract('I-1', 'Diana', true, 'health', 1200, 3);
    });

    afterEach(() => {
        contract.deactivate();
    });

    test('should save all fields correctly', () => {
        expect(contract.contractId).toBe('I-1');
        expect(contract.clientName).toBe('Diana');
        expect(contract.isActive).toBe(true);
        expect(contract.insuranceType).toBe('health');
        expect(contract.premium).toBe(1200);
        expect(contract.termYears).toBe(3);
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

    test('should calculate total premium correctly', () => {
        expect(contract.calculateTotalPremium()).toBe(3600);
    });
});
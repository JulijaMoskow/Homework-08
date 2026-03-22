import { BaseContract } from '../src/BaseContract';

describe('BaseContract', () => {
    let contract: BaseContract;

    beforeEach(() => {
        contract = new BaseContract('C-1', 'Alice', false);
    });

    afterEach(() => {
        contract.deactivate();
    });

    test('should save all fields correctly', () => {
        expect(contract.contractId).toBe('C-1');
        expect(contract.clientName).toBe('Alice');
        expect(contract.isActive).toBe(false);
    });

    test('should activate the contract', () => {
        contract.activate();
        expect(contract.isActive).toBe(true);
    });

    test('should deactivate the contract', () => {
        contract.activate();
        contract.deactivate();
        expect(contract.isActive).toBe(false);
    });
});
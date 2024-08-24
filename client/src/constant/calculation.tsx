export function calculateMonthlyInstallment(principal: number, annualInterestRate: number, loanDurationMonths: number): number {
    const monthlyInterestRate = annualInterestRate / 1200;
    const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanDurationMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, loanDurationMonths) - 1;
    const monthlyInstallment = numerator / denominator;
    return monthlyInstallment;
}

export function calculateTotalInterest(principal: number, monthlyInstallment: number, loanDurationMonths: number): number {
    const totalPayment = loanDurationMonths * monthlyInstallment;
    const totalInterest = totalPayment - principal;
    return totalInterest;
}
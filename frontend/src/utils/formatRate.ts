
function formatRate(rate : number): string {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    }).format(rate);
}

export default formatRate;
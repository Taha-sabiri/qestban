export function StringToDate(inputString: string) {
    
    // Extract year, month, and day parts
    const year = inputString?.substring(0, 4);
    const month = inputString?.substring(4, 6);
    const day = inputString?.substring(6, 8);

    // Create the formatted date string
    const formattedDateString = `${year}/${month}/${day}`;

    return formattedDateString;
}
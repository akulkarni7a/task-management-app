export function calculateDaysRemaining(dueDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dueDateObj = new Date(dueDate);
  dueDateObj.setHours(0, 0, 0, 0);

  // Handle invalid date
  if (isNaN(dueDateObj.getTime())) {
    throw new Error('Invalid date format');
  }

  const timeDiff = dueDateObj.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Handle past due dates
  if (daysDiff < 0) {
    return `Overdue by ${Math.abs(daysDiff)} day(s)`;
  }

  // Handle due today
  if (daysDiff === 0) {
    return 'Due today';
  }

  // Handle future dates
  return `${daysDiff} day(s) remaining`;
}


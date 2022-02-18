# Constants
MPG = 35
DISTANCE = 24
GAS_PRICE = 1.75

puts 'How many days did you carpool?'

# Get Days Carpooled
daysCarpooled = gets.to_i

# Calculate Total Miles Traveled
totalMilesForMonth = daysCarpooled * DISTANCE

# Calculate Total Gallons Used
gallonsGasUsed = (totalMilesForMonth / MPG).to_f

puts gallonsGasUsed.round(4)

# Calculate Gas Money Owed
gasMoneyOwed = gallonsGasUsed * GAS_PRICE

puts "You owe $#{gasMoneyOwed} dollars to your driver!"
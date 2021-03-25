# def capCase word
#   combinedWord = "Word = #{word}" 
#   return combinedWord.upcase
# end


puts "What is the name of your file?"
nameOfFile = gets.chomp
noteFile = File.new("#{nameOfFile}.txt", "w")

puts "What do you want to write?"
content = gets.chomp

noteFile.puts Time.new
noteFile.puts content
noteFile.close
puts "Your file has been saved!"
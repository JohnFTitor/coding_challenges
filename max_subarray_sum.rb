def max_sequence(arr)
  return 0 if arr.empty?
  current = arr[0]
  max_sum = arr[0] > 0 ? arr[0] : 0
  (1...arr.length).each do |i|
    current = [current + arr[i], arr[i]].max
    max_sum = [current, max_sum].max
  end
  max_sum
end

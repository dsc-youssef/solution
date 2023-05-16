# Now Select Unzip file
printf "Zip File: ";
read zipName;

# Loop in directory files.
for FILE in *; do

  # Check if this file not node_modules & not package.json
  if [[ $FILE != node_modules && $FILE != package.json && $FILE != vendor ]]; then
    rm -r $FILE
  fi
done

# Unzip This File
unzip ${zipName}

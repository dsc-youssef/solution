# Variables
outputFile="output";

# Create Folder to read output files
mkdir $outputFile;

# Loop in directory files.
for FILE in *; do

  # Check if this file not node_modules
  if [[ $FILE != node_modules && $FILE != $outputFile && $FILE != vendor ]]; then
    cp -r $FILE $outputFile;
  fi
done

# Now Select output Version
printf "Version: ";
read version;

# Zip This File
zip -r solution-${version}.zip $outputFile

rm -r $outputFile

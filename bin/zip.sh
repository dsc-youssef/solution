#################################################################
# Created By Dev.Youssef
#################################################################

# Variables
outputDir="output";
viewDirName="view";

# Create directory to read output files
mkdir $outputDir;

# Loop in directory files.
for FILE in *; do

  # Convert view directory
  if [[ $FILE == $viewDirName ]]; then
    # Create View Directory 
    mkdir $outputDir/$viewDirName
    
    # Loop in Old View Directory
    for VIEW_FILE in $viewDirName/*; do
      if [[ $VIEW_FILE != $viewDirName/node_modules ]]; then
        cp -r $VIEW_FILE $outputDir/$viewDirName
      fi
    done
  fi
  
  # Check if this file not node_modules
  if [[ $FILE != node_modules && $FILE != $outputDir && $FILE != vendor && $FILE != $viewDirName ]]; then
    cp -r $FILE $outputDir;
  fi
done

# Copy All Hidden Files To output directory
cp -r .* $outputDir

# Now Select output Version
printf "Version: ";
read version;

# Zip This File
zip -r solution-${version}.zip $outputDir

rm -r $outputDir

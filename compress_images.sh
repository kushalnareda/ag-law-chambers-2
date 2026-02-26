#!/bin/bash

# Find files larger than 500k
find public -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.jpeg" \) -size +500k > large_files.txt

while IFS= read -r file; do
    echo "Compressing: $file"
    
    # Determine max dimension based on path
    if [[ "$file" == *"hero"* || "$file" == *"office"* ]]; then
        MAX_DIM=1920
    elif [[ "$file" == *"services"* ]]; then
        MAX_DIM=1200
    else
        MAX_DIM=800
    fi

    # Check extension
    if [[ "$file" == *.png || "$file" == *.PNG ]]; then
        # Resize PNG
        sips -Z $MAX_DIM "$file"
    else
        # Resize and lower quality for JPGs
        sips -Z $MAX_DIM -s formatOptions 75 "$file"
    fi
done < large_files.txt

echo "Compression complete."
rm large_files.txt

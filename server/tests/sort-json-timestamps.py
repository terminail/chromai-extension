#!/usr/bin/env python3
"""
Script to sort JSON streaming data files by timestamp
"""
import json
import os
from datetime import datetime

def sort_json_by_timestamp(file_path):
    """Sort JSON array by timestamp field"""
    try:
        # Read the JSON file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Sort data by timestamp
        def get_timestamp(item):
            timestamp = item.get('timestamp')
            if timestamp:
                try:
                    # For ISO format timestamps like "2025-11-22T01:08:46.432Z"
                    return datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
                except:
                    # If parsing fails, return the string as-is
                    return timestamp
            # If no timestamp, use a default value that will sort to the end
            return datetime.max
        
        # Sort the data by timestamp
        sorted_data = sorted(data, key=get_timestamp)
        
        # Write the sorted data back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(sorted_data, f, indent=2, ensure_ascii=False)
        
        print(f"Successfully sorted {file_path}")
        print(f"Total records: {len(sorted_data)}")
        return True
        
    except Exception as e:
        print(f"Error sorting {file_path}: {e}")
        return False

if __name__ == "__main__":
    # Sort the deepseek.json file
    file_path = "streaming_data/deepseek.json"
    if os.path.exists(file_path):
        sort_json_by_timestamp(file_path)
    else:
        print(f"File {file_path} not found")
# import OS module
import os
# Get the list of all files and directories
path = "images/backup-wallpapers/"
dir_list = os.listdir(path)
# print("Files and directories in '", path, "' :")


# prints all files
#print(dir_list)
print('count is == ' + str(len(dir_list)))

print('[')

for i in dir_list:
    print('{')
    print('\ttitle: " ",')
    print('\tauthor: " ",')
    print('\turl: "/' + path + i + '"' )
    print('},')

print(']')
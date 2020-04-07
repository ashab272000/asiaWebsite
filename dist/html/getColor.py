import os

print(os.listdir('./dist/html'))



reading_file = open("./dist/html/JotunPage.html", "r")
lines = ""
infolines = ""
div = False
h4 = False
new_file_content = ""
for line in reading_file:
  stripped_line = line.strip()
  if '<li class="palette-tt"' in stripped_line :
        index = stripped_line.find("#")
        endIndex = index + 7
        lines += stripped_line[index: endIndex] + "\n"
        div = False
        h4 = False

  if '<div>' in stripped_line :
      div = True
  elif '<h4 style="color: ' in stripped_line and div == True:
      h4 = True
      if('<h4 style="color: balck"' in stripped_line):
        stripped_line = stripped_line.replace('<h4 style="color: black">', "")
      else:
        stripped_line = stripped_line.replace('<h4 style="color: white">', "")
      stripped_line = stripped_line.replace('</h4>', "")
      infolines += stripped_line + ", "
  elif '<p style="color: ' in stripped_line and h4 == True and div == True:

      div = False
      h4 = False
      if('<h4 style="color: black"' in stripped_line):
        stripped_line = stripped_line.replace('<p style="color: black">', "")
      else:
        stripped_line = stripped_line.replace('<p style="color: white">', "")
      stripped_line = stripped_line.replace('</p>', "")
      infolines += stripped_line+ "\n"
  else:
      div = False
      h4 = False
      
reading_file.close()


linesArr = lines.split()
infolinesArr = infolines.splitlines()
duplicates = []
count = 0
for line in linesArr :
    for line2 in linesArr:
        if(line == line2):
            count+=1
        if(count == 2):
            duplicates.append(line)
            break

dupStr = "[ "
infoStr = "[ "

for item in duplicates:
    dupStr += ", "
    dupStr += '"' + item +'"'

for p in infolinesArr:
    infoStr += ", "
    infoStr += '"' + p +'"'

dupStr += "];\n"
infoStr += "];"

dupStr.replace("," , "", 1)
infoStr.replace("," , "", 1)
        

writing_file = open("./dist/html/sample.txt", "w")
writing_file.write(dupStr)
writing_file.write(infoStr)
writing_file.close()

#<div>
#<h4 style="color: black">7236</h4>
#<p style="color: black">Jazz White</p>
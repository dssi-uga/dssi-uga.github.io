import os, pandas as pd
os.chdir(r'c:\Users\ns69956\OneDrive - University of Georgia\Documents\STEM Lab\Website\dssi-uga.github.io')
xl = pd.ExcelFile('assets/Member Responses.xlsx')
print('Sheets:', xl.sheet_names)
for sheet in xl.sheet_names:
    df = xl.parse(sheet)
    print('\n---', sheet, 'rows', len(df))
    print(df.head(20).to_string(index=False))

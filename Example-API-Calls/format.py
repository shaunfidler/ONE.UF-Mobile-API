fn = input("Filename? --> ")
unformatted = ""
with open(fn, "r") as f:
    unformatted = f.read()
    
if(unformatted[0] != "f"):
    print("Invalid format...Exiting")
else:
    api_call = unformatted.split("fetch(\"")[1].split("\"")[0]
    # cookie = unformatted.split("\"cookie\": \"")[1].split("\"")[0]

    # cookie = cookie.split(";")
    
    #response = unformatted.split("---")[1].split("\"")
    #print(response)

    template = \
"""-----------------------------------------------------------------------------
Request URL: 

    {{
        \"{}\"
    }}

""".format(api_call)

    # for c in cookie:
    #     c = c.split("=")
    #     print(c)
    #     template += \
    #     """
        
    #     {{
    #         \"{}\": \"{}\"
    #     }} 
    #     """.format(c[0], c[1])
        
    template += \
"""-----------------------------------------------------------------------------
Response: 

"""
        
#     resObjs = []
#     for r in response:
#         r = r.replace("{", "")
#         r = r.replace("}", "")
#         if(len(r) > 1):
#             resObjs.append(r)
        
#     #print(resObjs)
#     i = 0
#     for _ in range(int(len(resObjs) / 2)):
#         template += \
# """
#         \"{}\": \"{}\"{}""".format(resObjs[i], resObjs[i + 1], (",", "")[i + 2 == len(resObjs)])
#         i += 2
#     template += \
# """
#     }
# """
    
    #print(template)

    with open(fn, "w+") as f:
        f.write(template)
< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>

            <h1>Upload Image</h1>
            <form method="POST" action="/upload" enctype="multipart/form-data" ></form>
            <input type="file" name="image" />
            <input type="submit" />

        </body>
    </html>
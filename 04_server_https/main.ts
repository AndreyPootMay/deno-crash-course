import { serve } from "https://deno.land/std@0.65.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
    console.log(req.url)

    switch (req.url) {
        case "/":
            req.respond({ body: "Hello World\n" });
            break;
        case "/about":
            req.respond({ body: "About me\n" });
            break;
        default:
            req.respond({ body: "404 NOT FOUND!\n" });
            break;
    }
}

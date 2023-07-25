
import IndexPage from "./page"

export default function FeatureLayout({

  }) {
    return (
      <html lang="en">
        <body>
                 {/* <div className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                 </div> */}
                 <div className="fixed h-screen flex min-h-screen w-full flex-col items-center justify-center py-32"
               style={{
                 backgroundImage: "url('/image.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                }}>

                      <IndexPage/>
                    </div>
          <main>
          </main>
        </body>
      </html>
    );  
  }
  
  
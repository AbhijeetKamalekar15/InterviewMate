import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Mic, Save, Sparkles, Video, BookOpen } from "lucide-react";

const HowToUse = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Container className="py-12">
        <Card className="mt-24 max-w-3xl mx-auto bg-gray-100 shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-xl text-center text-blue-700">
              How to Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p><strong>Step 1:</strong> Log in to take an interview.</p>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <BookOpen className="text-purple-600" />
              <p>
                <strong>Step 2:</strong> After a successful login, the <span className="text-blue-700 font-semibold">"Take an Interview"</span> option will appear in the navigation bar.
              </p>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <Sparkles className="text-yellow-500" />
              <p>
                <strong>Step 3:</strong> Clicking <span className="text-blue-700 font-semibold">"Take an Interview"</span> will redirect you to the dashboard, where you can <span className="font-semibold">add a new interview</span> or revisit previous ones.
              </p>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <Video className="text-red-600" />
              <p>
                <strong>Step 4:</strong> Start your interview by clicking the <span className="text-yellow-500 font-semibold">sparkle icon ✨</span>.
              </p>
            </div>

            <p className="italic text-sm text-gray-500">
              📌 Note: The webcam feature is optional and only for self-observation.
            </p>

            <Separator />

            <div className="flex items-center gap-3">
              <Mic className="text-blue-600" />
              <p>
                <strong>Step 5:</strong> The <span className="text-blue-700 font-semibold">microphone 🎙️</span> records your voice, and the transcribed text appears below.
              </p>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <Save className="text-green-600" />
              <p>
                <strong>Step 6:</strong> Stop the recording and <span className="text-green-600 font-semibold">save</span> your answer using the <span className="text-green-600 font-semibold">save icon 💾</span>.
              </p>
            </div>

            <p className="italic text-sm text-gray-500">
              🚨 Note: Without saving, you won't receive feedback.
            </p>

            <Separator />

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>
                <strong>Step 7:</strong> When you're done, return to the dashboard to <span className="font-semibold">view your feedback</span>.
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default HowToUse;

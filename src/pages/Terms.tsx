
import GradientBackground from '@/components/GradientBackground';
import GlassMorphism from '@/components/GlassMorphism';
import FadeIn from '@/components/FadeIn';

const Terms = () => {
  return (
    <GradientBackground>
      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <GlassMorphism className="p-8">
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to SparkVibe, a creative prompt generation service. These Terms of Service govern your use of our website and services.
                </p>
                
                <h2>2. Using Our Service</h2>
                <p>
                  SparkVibe provides tools for generating creative prompts across various disciplines. The prompts are provided for inspiration and creative purposes only.
                </p>
                
                <h2>3. User Content</h2>
                <p>
                  Any content you create based on our prompts belongs to you. We claim no ownership over your creative works.
                </p>
                
                <h2>4. Privacy</h2>
                <p>
                  We respect your privacy and are committed to protecting it. We store minimal data necessary to provide our services.
                </p>
                
                <h2>5. Intellectual Property</h2>
                <p>
                  The SparkVibe service, including all content, features, and functionality, is owned by SparkVibe and protected by copyright, trademark, and other intellectual property laws.
                </p>
                
                <h2>6. Disclaimer</h2>
                <p>
                  SparkVibe provides prompts "as is" without warranties of any kind. We do not guarantee that prompts will always be appropriate, original, or suitable for your specific needs.
                </p>
                
                <h2>7. Changes to Terms</h2>
                <p>
                  We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
                </p>
                
                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us.
                </p>
              </div>
            </GlassMorphism>
          </FadeIn>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Terms;

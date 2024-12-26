<div class="absolute min-w-full min-h-full m-0 p-0 bg-slate-50">
    <div class="grid grid-cols-main p-10 max-w-screen-xl m-auto">
        <!-- Left panel -->
        <div class="pr-5">
            <img 
                src="chace in front of tennis courts.jpg" 
                class="w-full mb-5 overflow-clip" 
                alt="Headshot of Chace with GT tennis courts in background."
            >

            <p class="text-right right-0 text-3xl">Chace Caven</p>
            <p class="text-right right-0 text-xl">CS + Math</p>
            <p class="text-right right-0 text-xl">Georgia Institute of Technology</p>

        </div>
        <!-- Right panel -->
        <div class="pl-10">
            <div>
                <h1 class="text-3xl mb-2">Hi.</h1>
                
                <p class="text-xl py-2">
                    My goal is to invent 
                    <span class="font-semibold text-blue-400">artificial general intelligence</span>.
                </p>
                
                <p class="text-xl py-2">
                    I pursue this goal by investing my time in 
                    <span class="font-semibold text-red-500">machine learning</span>, 
                    <span class="font-semibold text-green-500">neuroscience</span>, and
                    <span class="font-semibold text-purple-500">early education.</span>
                </p>

                <p class="text-xl py-2">
                    Outside of work and research, I play club tennis, compete in hackathons, read books, and go on side quests to fix
                    my own visual system.
                </p>

                <div class="grid grid-cols-4">
                    <img 
                        src="chace leading team a to victory.jpg" 
                        class="w-full overflow-clip" 
                        alt="Chace with Georgia Tech Club Tennis Team A"
                        title="Chace with Georgia Tech Club Tennis Team A"
                    >
                    <img 
                        src="chace winning hackgt.jpg" 
                        class="w-full overflow-clip" 
                        alt="Chace wearing a Pupil Labs Neon eye tracker."
                        title="Chace wearing a Pupil Labs eye tracker in the CODA building at Georgia Tech"
                    >
                    <img 
                        src="chace in custom starship costume.jpg" 
                        class="w-full overflow-clip" 
                        alt="Chace wearing a Pupil Labs Neon eye tracker."
                        title="Chace wearing a Pupil Labs eye tracker in the CODA building at Georgia Tech"
                    >
                    <img 
                        src="chace with eye tracker.jpg" 
                        class="w-full overflow-clip" 
                        alt="Chace wearing a Pupil Labs Neon eye tracker."
                        title="Chace wearing a Pupil Labs eye tracker in the CODA building at Georgia Tech"
                    >
                </div>
                
                <p class="text-xl py-2">
                    Here are some of my projects and interests.
                </p>
            </div>

            <div>
                <h2 class="text-2xl py-2 italic">Generative models of spatial and visual information</h2>
                <p class="text-xl py-2">
                    Early in my career, I built drones. In order to make a drone autonomous, it needs to perform 
                    simultaneous <span class="font-semibold">localization</span> and <span class="font-semibold">mapping</span> (SLAM).

                    I was particularly interested in <span class="font-semibold">visual</span> SLAM.
                </p>
                <p class="text-xl py-2">
                    There exist algorithms, such as ORBSLAM, that 
                    (1) take in a stream of images, 
                    (2) extract hard-coded visual features from each image,
                    then (3) track the position of the features over time
                    to (4) estimate the position of the camera and 
                    (5) a sparse point cloud of the environment.
                </p>
                <p class="text-xl py-2">
                    This information is useful to me, a human being who understands how to interpret 
                    point clouds and measure distances through space. It is not as useful to a downstream algorithm.
                    In practice, researchers build another algorithm to process and interpret point clouds.
                </p>
                <p class="text-xl py-2">
                    This project is about creating a new method for performing SLAM without
                    building point clouds or plotted coordinate trajectories. Instead, I use machine learning to build
                    a generative model of vision and spatial information. Read the report <a href="https://api.wandb.ai/links/ccaven/cfhae2y9" class="underline text-blue-500" target="_blank">here</a>.
                </p>
            </div>
            <div>
                <h2 class="text-2xl py-2 italic">Self-supervised pretraining of audio spectrogram transformers</h2>
                <p class="text-xl py-2">
                    Recorded speech can, in theory, be decomposed into three attributes: 
                    the speech itself (words, emotion, pacing), 
                    the speaker (i.e., the physical structures that produced the sounds), 
                    and the background noise.
                </p>
                <p class="text-xl py-2">
                    This project was all about designing machine learning architectures and objectives 
                    to "pre-train" a model on 100,000 hours of unlabelled speech audio such that it
                    generalizes better on tasks where only 100 hours of labeled audio exists.
                </p>
                <p class="text-xl py-2">
                    In addition to machine learning methods, I wrote a custom data engine that streams audio
                    from the internet, performs augmentations, and dispatches training commands 413x faster than real-time.
                    The entire pipeline is written in safe, synchronous Rust (the best programming language).
                </p>
            </div>
            <div>
                <h2 class="text-2xl py-2 italic">Evolving small liquid neural networks to uncover neural population dynamics</h2>
                <p class="text-xl py-2">
                    This is my ongoing project in a 
                    <a href="https://siplab.gatech.edu/" class="underline text-blue-500" target="_blank">research lab</a>
                    at Georgia Tech led by Dr. Chris Rozell.
                </p>
                <p class="text-xl py-2">
                    The brain is an immensely complicated system. For mobile, movement-based tasks, analysis is limited: we can introduce stimuli and observe behavior.
                    We can also listen in via the use of a mobile electroencephalogram (EEG). I am interested in decoding EEG signals with
                    machine learning techniques.
                </p>
                <p class="text-xl py-2">
                    There's a problem: unlike speech processing, there is a tiny amount of EEG data available, ruling out most
                    deep learning techniques. Also, a major goal is model interpretability - neuroscientists want to use a trained model
                    to figure out new neural dynamics that can be used to diagnose or treat conditions.
                </p>
                <p class="text-xl py-2">
                    How do you create a system small enough to not overfit but still capable of modeling complex interactions?
                    I'm interested in using a specific type of sparse recurrent model called
                    <a href="https://www.nature.com/articles/s42256-020-00237-3" class="underline text-blue-500" target="_blank">neural circuit policies</a>.
                    I want to optimize the structure of a graph that itself directly models the EEG data.
                </p>
                <p class="text-xl py-2">
                    How do you optimize the structure of a graph? That seems like a non-differentiable task. Instead of gradient descent,
                    I am <a href="https://www.linkedin.com/posts/vincere-bio_tbt-ai-science-activity-7102279759610433539-x7M2?utm_source=share&utm_medium=member_desktop" class="underline text-blue-500" target="_blank">going back to my roots</a>
                    and using a fancy genetic algorithm for graph structure discovery called 
                    <a href="https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf" class="underline text-blue-500" target="_blank" rel="noopener noreferrer">NEAT</a>.
                    I hope to publish my first preprint in 2025, so stay tuned.
                </p>
            </div>
            <div>
                <h2 class="text-2xl py-2 italic">Neurons that fire together, wire together: exploring backpropagation alternatives</h2>
                <p class="text-xl py-2">
                    
                </p>
            </div>
        </div>
    </div>
</div>

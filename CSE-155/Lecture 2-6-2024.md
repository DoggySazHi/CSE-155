HCI Researchers, UX designers, Interaction Designer
- Form the basis of people who are trained in:
	- Designing _novel_ interaction
	- Identifying issues/challenges
		- Issues with the interactive system or the software you're using
		- Challenges are what users are feeling
	- Improving existing interaction or interfaces
	- Human factors + System factors
		- How humans deal with \<\<something\>\>
		- How can we exploit it to see how humans deal with these things
			- How we make decisions
			- How we act/perform
			- How we react
		- Account for these things (factors) to make our system better
			- e.g., how we process visual information
			- How to make it effective for the end-user
			- How to exploit visuals to help them get information, but also making the system better when compared to other systems (e.g., speed, ease of use, natural-ness)
		- => Elicit or encourage the best performance of human beings
- What are system factors?
	- Form factor: desktop? laptop? tablet? headless (i.e., no monitor)? headset?
		- Why can you physically do something with one thing (e.g., pick up a phone with one hand) and not so much with another (good luck picking up your desktop with one hand)
	- Technology: how to make something work?
		- Was technology available at the time where a solution was possible or even accessible at the time period?
		- Was there any connections with the real world that made it physically possible to use?
	- Algorithms: How do we make it know?
		- ML/AI: Adapt to the user, but how?
		- Statistics: Looks like this is how specific people do things
- How do we design novel interaction?
	- Get information from people, iterate until it's good enough, then find more people
- How do we identify issues/challenges and resolve them?
	- Again, find people to complain, find a "novel interaction" to investigate/propose, and run a research experiment to see if it's acceptable or not
		- It could work, but it may not be generally good to feel/use
- What are these experiments?
	- User studies, experiments, user testing
	- Standard design for conducting these studies, testing different factors to make sure a concept is viable to use
		- Nobody will check it for you, you must do it yourself or let the market figure it out for you
			- People don't know if your idea is good or bad, because they might have a different background than the true userbase

OK back to the actual lecture

## Hands: Handedness
- Right-handedness is more common, but 10% of people are left-handed
	- You can't lose those customers!
- The primary hand is usually stronger, faster, or more dexterous
	- And the opposite for the secondary hand
- True ambidexterity is rare

## Voice
- Human vocal cords are responders
	- Speech to text!
	- Movement in the larynx, or pulmonary pressure in the lungs
		- I.e., you can still detect a person talking without any actual noise/sound
- Speech and non-speech can be vocalized
	- i.e., a language or just blahblah?
	- Both are usable to control
		- Speech: use recognition for a language
			- Natural and intuitive, but you need to know the language they're speaking
			- High learnability: how to command something, and how to write a way to interpret it - not always easy to use, but easy to figure out how to use
			- High discoverability: easy to figure out how to use and what commands are available
			- Low accuracy rate, especially in noisy places
			- Google and Amazon can spy on you
				- You're speaking out loud, and they have to hear your wake word...
		- Non-speech + signal detection
			- Beep is different from boop!
				- Pitches, phrase (hum vs scream), duration, *change* in anything
			- More universal, but it's not natural...
			- Can also detect non-human noises (e.g., the sound of glass breaking, dogs barking)

## Blinking and Eye Movement
- Can you use your vision as a responder? Of course...
- Blinking can be used for computer control when other means of interactions are unavailable
	- Fatigue and irritation due to using a function that's used unconsciously
		- Hard to not blink either (e.g., trying to not send a command on accident)
	- Increases cognitive load

Same thing for **Head Movement**
- Not natural behavior
- Use three points to identify head movement in 3D, simple using IR
- Actively moving using head (unless it's say a simulation, where that might be useful)
	- But nodding for specific input could be annoying and accidentally select something
	- Same approach as IR hand tracking

## Lip Movement
- Speak without speaking
- Silent speed or mouth gestures
	- I.e., more private/secure than speech
- Harder to implement (usually needs computer vision and a lot of context, such as compound words)
- No effect of a noisy environment on recognition
- But needs a camera/sufficient light environment to see the mouth
	- IR might work...
- Different accents, speaking abilities may impact performance; neural network needs to be trained for different ways of silent vocalization
- Current models are slower than speech - processing speed is slow, the human is relatively fast

## Feet Movement
- Not dominant in computer systems, or any other system with easy access to electricity
	- E.g., pedaling a system to run, such as a sewing machine or a letter press
- Physically demanding
- But nowadays it's interesting in VR because we can get more input from the human, e.g., running or keeping the hands free
	- More natural interaction, especially for tasks that are normally done by feet
		- Or combine hands and feet for multiple things
	- Or as an alternative mechanism if you're say, holding something and cannot use hand input
	- Stand on a virtual region and move in 3D as well
	- Or teleporting: don't go step by step using a controller, but you can't walk because it's far and tedious: how can naturally teleport?
		- Video: Podoportation: use your feet to teleport instead of your hand controller
			- Looks janky af

I'll be real I don't remember what happened here other than something about expertise and phone keyboards

Toe movements??

Muscle Movements
- Uses EMG sensors (muscle extension/contraction) and IMU sensors (general movement)
- Muscle movements are mapped to computer actions
- Many applications in accessibility and passive controls
- Many degrees of freedom for different actions, allows analogue and digital input
- Not practical at the time (2018), not many uses and couldn't be easily commercialized, more of a novelty device
	- But VR might be a good use case for this
		- No need to hold something, mounted on the arm, relatively light
	- Only issue is that it needs to be recharged and might be expensive to implement

Other responders:
- Facial expressions
	- Smiles, frowns, raised eyebrow, more
- Ear movements:
	- Oops, not everyone can do it...
- Biting
- Tongue movements
	- Can be useful to "lipread", since your tongue also moves for specific sounds
- Lots more that he doesn't want to mention

The "Midas Touch" Problem:
- Want to click on a button, but when moving, you accidentally select everything on your way
- The accidental selection or activation issue
	- The system doesn't always know whether the user intended to perform an action or not
	- Error correction is usually costly
	- Have a separate activation action (but also make it not costly, e.g., confirmation)
- Evident in any tracking and recognition-based interaction techniques (i.e., not direct input), including:
	- Eye gaze pointing (oops, i saw something else...)
	- Gesture recognition (oops, my arm got tired)
	- Head movements (oops, someone walked in)
	- Muscle movements (oops, spasm)
	- Speech recognition (oops, wrong word detected)
- Always tracking/listening
	- What about privacy and security? Wake words, wake movements, if you're even actively using the system, etc.
	- Might be on the midterm: did we give up on privacy? new generation thing
		- We cannot survive without giving up our data to say, Google, in this society
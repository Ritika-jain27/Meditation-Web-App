function getBotResponse(input) {
    //rock paper scissors
    if (input == "What is meditation") {
        return "The practice of focused concentration, bringing yourself back to the moment over and over again";
    } else if (input == "What is the purpose to meditate?") {
        return "Its purpose is to help increase both physical and mental peace and calm";
    } else if (input == "What are the benefits of meditation in my daily life?") {
        return "The mental health benefits of meditation include better focus and concentration, improved self-awareness and self-esteem, lower levels of stress and anxiety, and fostering kindness. Meditation also has benefits for your physical health, as it can improve your tolerance for pain and help fight substance addiction.";
    }
    else if (input == "How many times meditate a day?") {
        return "In terms of how often you should meditate, it's up to you. Some people benefit from sitting once every day, while others prefer a short session in the morning and another in the evening. Sitting more than once a day can help manage overthinking and keep your mind calm and stress-resilient throughout the day.";
    }
    else if (input == "Is it OK to meditate at night?") {
        return "Meditation may help you sleep better. As a relaxation technique, it can quiet the mind and body while enhancing inner peace. When done before bedtime, meditation may help reduce insomnia and sleep troubles by promoting overall calmness.";
    }
    else if (input == "Is 10 minutes of meditation enough?") {
        return "Sitting down to clear your mind for just 10 minutes is enough to overcome stress and anxiety";
    }
    else if (input == "Can I meditate with music?") {
        return "Combining music with meditation can deepen the positive effects of both, and bring you greater stress relief.";
    }


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
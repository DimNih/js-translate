## translate language

translate bahsa pakai fetch api:? lupa jir

## Importan
isi ke file css

```bash
    /* General Styles */
    body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
    }

    /* Container */
    .container {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 40px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        max-width: 600px;
        width: 100%;
        text-align: center;
        animation: scaleUp 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    /* Heading */
    h1 {
        font-size: 2.8rem;
        margin-bottom: 30px;
        font-weight: 600;
        background: linear-gradient(45deg, #00ff87, #60efff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        display: inline-block;
    }

    h1::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #00ff87, transparent);
    }

    /* Textarea */
    .input-group {
        position: relative;
        margin-bottom: 30px;
    }

    textarea {
        width: 90%;
        height: 150px;
        padding: 20px;
        border: none;
        border-radius: 15px;
        font-size: 1rem;
        resize: none;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        transition: all 0.3s ease;
    }

    textarea:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 20px rgba(96, 239, 255, 0.2);
    }

    textarea::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    /* Select and Button */
    .controls {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
    }

    select, button {
        padding: 23px;
        border: none;
        border-radius: 12px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        backdrop-filter: blur(5px);
    }

    select {
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 15px center;
        background-size: 16px;
        width: 150px;
    }

    option {
        background-color: #0f0c29;
    }

    select:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    button {
        background: linear-gradient(45deg, #00ff87, #60efff);
        color: #1a1a1a;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(96, 239, 255, 0.3);
    }

    /* Result Section */
    #result {
        margin-top: 30px;
        font-size: 1.2rem;
        color: #fff;
        padding: 25px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.05);
        min-height: 100px;
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }

    #result.show {
        opacity: 1;
        transform: translateY(0);
    }

    #result::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transition: 0.5s;
    }

    #result:hover::before {
        left: 100%;
    }

    /* Animations */
    @keyframes scaleUp {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    /* Loading State */
    .loading {
        position: relative;
        pointer-events: none;
    }

    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top-color: #00ff87;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .container {
            padding: 25px;
        }
        
        h1 {
            font-size: 2.2rem;
        }
        
        .controls {
            flex-direction: column;
        }
        
        textarea {
            height: 120px;
        }
    }
```


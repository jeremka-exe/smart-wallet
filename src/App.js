import React, { useState, useEffect, useRef } from 'react';
import { Home, CreditCard, ShoppingBag, QrCode, User, TrendingUp, Building2, Wallet, ArrowUpRight, ArrowDownLeft, Bell, Settings, ChevronRight, Smartphone, Wifi, Zap, FileText, PiggyBank, Percent, LineChart, Eye, EyeOff, Copy, Check, X, Camera, Lock, Fingerprint, ArrowLeft, Search, Filter, Download, Share2, MessageSquare, Phone, Mail, MapPin, Calendar, Clock, Star, Award, Target, TrendingDown, Plus, Minus, RefreshCw, Send, DollarSign, Globe, Shield, AlertCircle, CheckCircle, Info, ShoppingCart, Package, Tag, Gift, Headphones, Cpu } from 'lucide-react';

const SapphireSuperApp = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [theme, setTheme] = useState('light');
  const [showBalance, setShowBalance] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [registrationStep, setRegistrationStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [iin, setIin] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [userData, setUserData] = useState(null);
  const [transferData, setTransferData] = useState({
    type: '',
    recipient: '',
    amount: '',
    comment: ''
  });
  const [selectedCard, setSelectedCard] = useState(0);
  const [notification, setNotification] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [cashbackBalance, setCashbackBalance] = useState(1245);
  const [cartItems, setCartItems] = useState([]);
  const [aiAdvice, setAiAdvice] = useState('');
  
  // Рефы для инпутов
  const phoneInputRef = useRef(null);
  const smsInputRef = useRef(null);
  const iinInputRef = useRef(null);

  const isDark = theme === 'dark';

  // Premium цветовая палитра
  const colors = {
    primary: '#6C5CE7',
    primaryDark: '#5F4FD1',
    secondary: '#00B894',
    accent: '#FDCB6E',
    danger: '#FF7675',
    success: '#00B894',
    warning: '#FDCB6E',
    info: '#74B9FF',
    light: isDark ? '#1A1A2E' : '#FFFFFF',
    background: isDark ? '#0F0F1E' : '#F8F9FA',
    backgroundSecondary: isDark ? '#16162A' : '#F1F3F5',
    text: isDark ? '#E8E8F0' : '#2D3436',
    textSecondary: isDark ? '#A0A0B0' : '#636E72',
    card: isDark ? '#252540' : '#FFFFFF',
    cardHover: isDark ? '#2D2D50' : '#F8F9FA',
    border: isDark ? '#3A3A50' : '#E8E8F0',
    shadow: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'
  };

  // Инициализация - splash screen
  useEffect(() => {
    if (currentScreen === 'splash') {
      setTimeout(() => setCurrentScreen('onboarding'), 2500);
    }
  }, [currentScreen]);

  // Генерация AI совета
  useEffect(() => {
    if (isPremium) {
      const adviceList = [
        "📊 Анализ расходов: Вы тратите на 25% больше на продукты в этом месяце. Попробуйте покупать оптом.",
        "💡 Рекомендация: Откройте накопительный счет под 16% годовых. За год можно получить до 80,000₸.",
        "💰 Экономия: Вы можете сэкономить 5,200₸ в месяц, оптимизировав подписки и тарифы.",
        "📈 Инвестиции: Рассмотрите покупку ETF фондов. Средняя доходность 12-15% годовых.",
        "🛒 Кэшбек: Используйте кэшбек-программу в магазинах-партнерах. До 15% возврата."
      ];
      setAiAdvice(adviceList[Math.floor(Math.random() * adviceList.length)]);
    }
  }, [isPremium]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Мокап данных пользователя
  const mockUserData = {
    name: 'Айдар Нурланов',
    phone: '+7 707 123 4567',
    iin: '950825301234',
    balance: 487340,
    cashback: 1245,
    premium: false,
    cards: [
      { number: '4400 4301 2345 4892', type: 'Основная', balance: 487340, currency: '₸', color: ['#6C5CE7', '#A29BFE'] },
      { number: '5536 9141 8765 1234', type: 'Сбережения', balance: 1250000, currency: '₸', color: ['#00B894', '#55EFC4'] },
      { number: '4400 4301 9876 5432', type: 'USD карта', balance: 2450, currency: '$', color: ['#FDCB6E', '#FFA502'] }
    ],
    documents: [
      { type: 'passport', number: 'N12345678', issued: '15.03.2020', expires: '15.03.2030' },
      { type: 'driver', number: 'AB1234567', issued: '20.05.2019', expires: '20.05.2029' }
    ],
    vehicles: [
      { type: 'Автомобиль', model: 'Toyota Camry 2021', number: 'A 777 BC 02', vin: 'JT2BF18K8X0123456' }
    ]
  };

  const transactions = [
    { id: 1, name: 'Kaspi Shop', amount: -12450, date: '08.12.2025 14:23', category: 'Покупки', icon: ShoppingBag, status: 'completed', cashback: 125 },
    { id: 2, name: 'Зарплата', amount: 350000, date: '08.12.2025 09:00', category: 'Доход', icon: Wallet, status: 'completed', cashback: 0 },
    { id: 3, name: 'Перевод Асель К.', amount: -15000, date: '07.12.2025 18:30', category: 'Переводы', icon: Send, status: 'completed', cashback: 0 },
    { id: 4, name: 'Beeline', amount: -3000, date: '07.12.2025 12:00', category: 'Связь', icon: Smartphone, status: 'completed', cashback: 30 },
    { id: 5, name: 'Коммуналка', amount: -25600, date: '06.12.2025 10:15', category: 'ЖКХ', icon: Zap, status: 'completed', cashback: 256 }
  ];

  const expenses = [
    { category: 'Продукты', amount: 45000, percent: 32, color: colors.danger },
    { category: 'Транспорт', amount: 25000, percent: 18, color: colors.warning },
    { category: 'Развлечения', amount: 35000, percent: 25, color: colors.info },
    { category: 'ЖКХ', amount: 15000, percent: 11, color: colors.secondary },
    { category: 'Связь', amount: 8000, percent: 6, color: colors.primary },
    { category: 'Остальное', amount: 30000, percent: 22, color: colors.textSecondary }
  ];

  // Товары для маркетплейса
  const marketplaceItems = [
    { id: 1, name: 'iPhone 15 Pro', price: 699990, category: 'Электроника', image: '📱', cashback: 5, rating: 4.8 },
    { id: 2, name: 'Ноутбук MacBook Air', price: 549990, category: 'Электроника', image: '💻', cashback: 7, rating: 4.9 },
    { id: 3, name: 'Наушники AirPods Pro', price: 89990, category: 'Аксессуары', image: '🎧', cashback: 10, rating: 4.7 },
    { id: 4, name: 'Умные часы Apple Watch', price: 249990, category: 'Гаджеты', image: '⌚', cashback: 8, rating: 4.6 },
    { id: 5, name: 'Пылесос Dyson', price: 299990, category: 'Техника', image: '🧹', cashback: 12, rating: 4.5 },
    { id: 6, name: 'Кофемашина', price: 179990, category: 'Техника', image: '☕', cashback: 15, rating: 4.8 },
    { id: 7, name: 'Фитнес-браслет', price: 29990, category: 'Гаджеты', image: '🏃', cashback: 20, rating: 4.3 },
    { id: 8, name: 'Портативная колонка', price: 49990, category: 'Аксессуары', image: '🔊', cashback: 8, rating: 4.4 }
  ];

  // Онбординг слайды
  const onboardingSlides = [
    {
      title: 'Всё в одном приложении',
      description: 'Платежи, переводы, покупки, инвестиции — управляйте финансами легко',
      icon: '💎',
      gradient: ['#6C5CE7', '#A29BFE']
    },
    {
      title: 'Умные финансы с AI',
      description: 'Персональный помощник анализирует расходы и помогает экономить',
      icon: '🤖',
      gradient: ['#00B894', '#55EFC4']
    },
    {
      title: 'Система кэшбека',
      description: 'Получайте до 20% кэшбека за покупки в магазинах-партнерах',
      icon: '💰',
      gradient: ['#FDCB6E', '#FFA502']
    }
  ];

  // ==================== КОМПОНЕНТЫ ====================

  const Button = ({ children, onClick, variant = 'primary', fullWidth, disabled, icon: Icon, size = 'md' }) => {
    const variants = {
      primary: `bg-gradient-to-r ${isDark ? 'from-[#5F4FD1]' : 'from-[#6C5CE7]'} to-[#A29BFE] text-white`,
      secondary: `bg-[${colors.card}] border border-[${colors.border}] text-[${colors.text}]`,
      ghost: `bg-transparent text-[${colors.primary}]`,
      danger: `bg-[${colors.danger}] text-white`
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${variants[variant]} ${sizes[size]}
          ${fullWidth ? 'w-full' : ''}
          rounded-2xl font-semibold transition-all duration-300
          hover:scale-105 active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          flex items-center justify-center gap-2
          shadow-lg hover:shadow-xl
        `}
        style={{
          backgroundColor: variant === 'primary' ? colors.primary : 
                         variant === 'danger' ? colors.danger : undefined,
          borderColor: variant === 'secondary' ? colors.border : undefined,
          color: variant === 'primary' || variant === 'danger' ? 'white' : 
                variant === 'secondary' ? colors.text : 
                variant === 'ghost' ? colors.primary : undefined
        }}
      >
        {Icon && <Icon size={20} />}
        {children}
      </button>
    );
  };

  const Input = ({ label, value, onChange, type = 'text', placeholder, icon: Icon, error, inputRef, autoFocus }) => {
    const handleChange = (e) => {
      const newValue = e.target.value;
      
      // Форматирование телефона
      if (label && label.includes('телефон')) {
        let phoneDigits = newValue.replace(/\D/g, '');
        if (phoneDigits.length > 11) phoneDigits = phoneDigits.slice(0, 11);
        
        let formattedPhone = phoneDigits;
        if (phoneDigits.length > 0) {
          formattedPhone = '+7 ';
          if (phoneDigits.length > 1) {
            formattedPhone += phoneDigits.substring(1, 4);
          }
          if (phoneDigits.length > 4) {
            formattedPhone += ' ' + phoneDigits.substring(4, 7);
          }
          if (phoneDigits.length > 7) {
            formattedPhone += ' ' + phoneDigits.substring(7, 9);
          }
          if (phoneDigits.length > 9) {
            formattedPhone += ' ' + phoneDigits.substring(9, 11);
          }
        }
        onChange(formattedPhone);
      }
      // Форматирование ИИН
      else if (label && label.includes('ИИН')) {
        const numericValue = newValue.replace(/\D/g, '').slice(0, 12);
        onChange(numericValue);
      }
      // Форматирование SMS кода
      else if (label && label.includes('SMS')) {
        const numericValue = newValue.replace(/\D/g, '').slice(0, 4);
        onChange(numericValue);
      }
      // Остальные поля
      else {
        onChange(newValue);
      }
    };

    return (
      <div className="space-y-2">
        {label && <label className="text-sm font-medium" style={{ color: colors.text }}>{label}</label>}
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon size={20} style={{ color: colors.textSecondary }} />
            </div>
          )}
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full rounded-2xl px-4 py-4 font-medium transition-all focus:ring-2 outline-none"
            style={{
              backgroundColor: colors.card,
              color: colors.text,
              border: `2px solid ${error ? colors.danger : colors.border}`,
              paddingLeft: Icon ? '3rem' : '1rem',
              boxShadow: `0 2px 8px ${colors.shadow}`
            }}
            autoFocus={autoFocus}
          />
        </div>
        {error && <p className="text-sm" style={{ color: colors.danger }}>{error}</p>}
      </div>
    );
  };

  const Card = ({ children, onClick, className = '', noPadding }) => (
    <div
      onClick={onClick}
      className={`rounded-3xl transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''} ${className}`}
      style={{
        backgroundColor: colors.card,
        border: `1px solid ${colors.border}`,
        padding: noPadding ? 0 : '1.5rem',
        boxShadow: `0 4px 16px ${colors.shadow}`
      }}
    >
      {children}
    </div>
  );

  // ==================== ЭКРАНЫ ====================

  // Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #A29BFE 100%)` }}>
      <div className="text-center animate-pulse">
        <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-6xl shadow-2xl">
          💎
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Sapphire SuperApp</h1>
        <p className="text-white/80 text-lg">Умный кошелек нового поколения</p>
      </div>
    </div>
  );

  // Онбординг
  const OnboardingScreen = () => (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.background }}>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center space-y-8">
          <div 
            className="w-48 h-48 mx-auto rounded-full flex items-center justify-center text-8xl shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${onboardingSlides[onboardingStep].gradient[0]}, ${onboardingSlides[onboardingStep].gradient[1]})` }}
          >
            {onboardingSlides[onboardingStep].icon}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold" style={{ color: colors.text }}>
              {onboardingSlides[onboardingStep].title}
            </h2>
            <p className="text-lg" style={{ color: colors.textSecondary }}>
              {onboardingSlides[onboardingStep].description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex justify-center gap-2">
          {onboardingSlides.map((_, idx) => (
            <div
              key={idx}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: idx === onboardingStep ? '32px' : '8px',
                backgroundColor: idx === onboardingStep ? colors.primary : colors.border
              }}
            />
          ))}
        </div>

        <div className="flex gap-4">
          {onboardingStep > 0 && (
            <Button variant="secondary" onClick={() => setOnboardingStep(onboardingStep - 1)}>
              Назад
            </Button>
          )}
          <Button
            fullWidth
            onClick={() => {
              if (onboardingStep < onboardingSlides.length - 1) {
                setOnboardingStep(onboardingStep + 1);
              } else {
                setCurrentScreen('registration');
              }
            }}
          >
            {onboardingStep < onboardingSlides.length - 1 ? 'Далее' : 'Начать'}
          </Button>
        </div>
      </div>
    </div>
  );

  // Регистрация
  const RegistrationScreen = () => {
    const steps = ['phone', 'sms', 'iin', 'photo', 'pin', 'biometric'];
    const currentStep = steps[registrationStep];

    const handlePhoneSubmit = () => {
      if (phoneNumber.replace(/\D/g, '').length >= 11) {
        setRegistrationStep(1);
        showNotification('SMS код отправлен');
        setTimeout(() => {
          if (smsInputRef.current) {
            smsInputRef.current.focus();
          }
        }, 100);
      }
    };

    const handleSmsSubmit = () => {
      if (smsCode.length === 4) {
        setRegistrationStep(2);
        setTimeout(() => {
          if (iinInputRef.current) {
            iinInputRef.current.focus();
          }
        }, 100);
      }
    };

    const renderStep = () => {
      switch(currentStep) {
        case 'phone':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-4xl mb-4">
                  📱
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Регистрация</h2>
                <p style={{ color: colors.textSecondary }}>Введите номер телефона</p>
              </div>
              <Input
                label="Номер телефона"
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="+7 701 123 4567"
                icon={Phone}
                type="tel"
                inputRef={phoneInputRef}
                autoFocus={true}
              />
              <Button
                fullWidth
                onClick={handlePhoneSubmit}
                disabled={phoneNumber.replace(/\D/g, '').length < 11}
              >
                Получить код
              </Button>
            </div>
          );

        case 'sms':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-4xl mb-4">
                  💬
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Подтверждение</h2>
                <p style={{ color: colors.textSecondary }}>
                  Введите код из SMS<br/>
                  отправленный на {phoneNumber}
                </p>
              </div>
              <Input
                label="Код из SMS (4 цифры)"
                value={smsCode}
                onChange={setSmsCode}
                placeholder="1234"
                type="text"
                icon={MessageSquare}
                inputRef={smsInputRef}
                autoFocus={true}
              />
              <Button 
                fullWidth 
                onClick={handleSmsSubmit}
                disabled={smsCode.length < 4}
              >
                Подтвердить
              </Button>
              <Button variant="ghost" fullWidth onClick={() => showNotification('Код отправлен повторно')}>
                Отправить код повторно
              </Button>
            </div>
          );

        case 'iin':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-4xl mb-4">
                  🪪
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Данные</h2>
                <p style={{ color: colors.textSecondary }}>Введите ИИН для идентификации</p>
              </div>
              <Input
                label="ИИН (12 цифр)"
                value={iin}
                onChange={setIin}
                placeholder="000000000000"
                type="text"
                icon={FileText}
                inputRef={iinInputRef}
                autoFocus={true}
              />
              <div className="rounded-2xl p-4 flex items-start gap-3" style={{ backgroundColor: `${colors.info}20` }}>
                <Info size={20} style={{ color: colors.info }} className="flex-shrink-0 mt-1" />
                <p className="text-sm" style={{ color: colors.text }}>
                  Ваши данные защищены и используются только для идентификации согласно законодательству РК
                </p>
              </div>
              <Button 
                fullWidth 
                onClick={() => setRegistrationStep(3)} 
                disabled={iin.length !== 12}
              >
                Продолжить
              </Button>
            </div>
          );

        case 'photo':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-4xl mb-4">
                  📸
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Селфи</h2>
                <p style={{ color: colors.textSecondary }}>Сделайте фото для подтверждения личности</p>
              </div>
              <div 
                className="aspect-square rounded-3xl flex items-center justify-center border-4 border-dashed"
                style={{ borderColor: colors.border, backgroundColor: colors.backgroundSecondary }}
              >
                <div className="text-center space-y-4">
                  <Camera size={64} style={{ color: colors.textSecondary }} className="mx-auto" />
                  <Button icon={Camera}>Сделать фото</Button>
                </div>
              </div>
              <Button fullWidth onClick={() => setRegistrationStep(4)}>
                Продолжить
              </Button>
            </div>
          );

        case 'pin':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-4xl mb-4">
                  🔐
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>PIN-код</h2>
                <p style={{ color: colors.textSecondary }}>Создайте 4-значный PIN для входа</p>
              </div>
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundColor: pinCode.length >= i ? colors.primary : colors.backgroundSecondary,
                      color: pinCode.length >= i ? 'white' : colors.textSecondary
                    }}
                  >
                    {pinCode.length >= i ? '●' : '○'}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((num, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (num === '⌫') {
                        setPinCode(pinCode.slice(0, -1));
                      } else if (num !== '' && pinCode.length < 4) {
                        const newPin = pinCode + num;
                        setPinCode(newPin);
                        if (newPin.length === 4) {
                          setTimeout(() => setRegistrationStep(5), 300);
                        }
                      }
                    }}
                    className="aspect-square rounded-2xl text-2xl font-bold transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: num === '' ? 'transparent' : colors.card,
                      color: colors.text,
                      border: `2px solid ${colors.border}`
                    }}
                    disabled={num === ''}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          );

        case 'biometric':
          return (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-4xl mb-4">
                  👆
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Биометрия</h2>
                <p style={{ color: colors.textSecondary }}>
                  Включите вход по отпечатку пальца<br/>
                  или Face ID для быстрого доступа
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <Fingerprint size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold" style={{ color: colors.text }}>Touch ID / Face ID</div>
                        <div className="text-sm" style={{ color: colors.textSecondary }}>Быстрый и безопасный вход</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <Button
                fullWidth
                icon={CheckCircle}
                onClick={() => {
                  const userWithCashback = {
                    ...mockUserData,
                    cashback: cashbackBalance,
                    premium: isPremium
                  };
                  setUserData(userWithCashback);
                  setCurrentScreen('home');
                  showNotification('Регистрация завершена! Получите 500₸ на бонусный счет!');
                }}
              >
                Включить и завершить
              </Button>
              <Button variant="ghost" fullWidth onClick={() => {
                const userWithCashback = {
                  ...mockUserData,
                  cashback: cashbackBalance,
                  premium: isPremium
                };
                setUserData(userWithCashback);
                setCurrentScreen('home');
              }}>
                Пропустить
              </Button>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen p-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            {registrationStep > 0 && (
              <button 
                onClick={() => setRegistrationStep(Math.max(0, registrationStep - 1))}
                className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
              >
                <ArrowLeft size={24} style={{ color: colors.text }} />
              </button>
            )}
            <div className="flex-1 flex justify-center gap-2 mx-4">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 rounded-full transition-all"
                  style={{
                    backgroundColor: idx <= registrationStep ? colors.primary : colors.border
                  }}
                />
              ))}
            </div>
          </div>
          {renderStep()}
        </div>
      </div>
    );
  };

  // Главный экран
  const HomeScreen = () => {
    const totalBalance = mockUserData.cards.reduce((sum, card) => sum + card.balance, 0);
    
    return (
      <div className="space-y-6">
        {/* Карусель карт */}
        <div className="relative -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {mockUserData.cards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCard(idx)}
                className="min-w-[85%] snap-center"
              >
                <div
                  className="rounded-3xl p-6 text-white relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${card.color[0]} 0%, ${card.color[1]} 100%)`,
                    boxShadow: selectedCard === idx ? `0 8px 32px ${card.color[0]}60` : 'none'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-sm opacity-80 mb-1">{card.type}</div>
                    <div className="text-4xl font-bold mb-6 flex items-center gap-3">
                      {showBalance ? `${card.balance.toLocaleString()} ${card.currency}` : '••• •••'}
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setShowBalance(!showBalance); 
                        }}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {showBalance ? <Eye size={24} /> : <EyeOff size={24} />}
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-80">Номер карты</div>
                        <div className="text-lg font-semibold tracking-wider">{card.number}</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition">
                          <Plus size={20} />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition">
                          <Send size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кэшбек и AI Ассистент */}
        <div className="grid grid-cols-2 gap-4">
          {/* Кэшбек карта */}
          <Card>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.success}20` }}>
                    <Percent size={20} style={{ color: colors.success }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>Кэшбек</div>
                    <div className="text-xl font-bold" style={{ color: colors.text }}>{cashbackBalance} ₸</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => showNotification('Кэшбек доступен для оплаты в магазинах-партнерах')}
                >
                  Использовать
                </Button>
              </div>
              <div className="text-xs" style={{ color: colors.textSecondary }}>
                +125₸ за последнюю покупку. До 20% кэшбека в магазинах
              </div>
            </div>
          </Card>

          {/* AI Ассистент */}
          <Card onClick={() => isPremium ? setCurrentScreen('ai-assistant') : showNotification('AI ассистент доступен с премиум подпиской', 'info')}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                    <Cpu size={20} style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>AI Ассистент</div>
                    <div className="text-lg font-bold" style={{ color: colors.text }}>
                      {isPremium ? 'Активен' : 'Premium'}
                    </div>
                  </div>
                </div>
                {!isPremium && (
                  <div className="px-2 py-1 rounded-lg text-xs font-bold" style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}>
                    PRO
                  </div>
                )}
              </div>
              <div className="text-xs" style={{ color: colors.textSecondary }}>
                {isPremium ? 'Персональные советы по финансам' : 'Откройте премиум для доступа'}
              </div>
            </div>
          </Card>
        </div>

        {/* Быстрые действия */}
        <Card>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: ArrowUpRight, label: 'Перевод', color: colors.danger, action: () => setCurrentScreen('transfer') },
              { icon: Smartphone, label: 'Связь', color: colors.secondary, action: () => setCurrentScreen('payments') },
              { icon: QrCode, label: 'QR', color: colors.primary, action: () => setCurrentScreen('qr') },
              { icon: LineChart, label: 'Аналитика', color: colors.success, action: () => setCurrentScreen('analytics') }
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={action.action}
                className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  <action.icon size={24} style={{ color: action.color }} />
                </div>
                <span className="text-xs font-medium" style={{ color: colors.text }}>{action.label}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Сервисы */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: colors.text }}>Сервисы</h3>
            <button style={{ color: colors.primary }} className="text-sm font-medium">Все</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: ShoppingBag, label: 'Магазин', color: colors.secondary, screen: 'marketplace' },
              { icon: TrendingUp, label: 'Инвестиции', color: '#A29BFE', screen: 'investments' },
              { icon: Building2, label: 'Банк', color: colors.primary, screen: 'bank' },
              { icon: PiggyBank, label: 'Депозиты', color: colors.accent, screen: 'deposits' }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentScreen(service.screen)}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-transform hover:scale-105"
                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>
                <span className="text-xs font-medium text-center" style={{ color: colors.text }}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Транзакции с кэшбеком */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: colors.text }}>История</h3>
            <button onClick={() => setCurrentScreen('history')} style={{ color: colors.primary }} className="text-sm font-medium">
              Все
            </button>
          </div>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((tx) => (
              <Card key={tx.id} onClick={() => setCurrentScreen('transaction-detail')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${tx.amount > 0 ? colors.success : colors.danger}20` }}
                    >
                      <tx.icon size={20} style={{ color: tx.amount > 0 ? colors.success : colors.danger }} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: colors.text }}>{tx.name}</div>
                      <div className="text-sm" style={{ color: colors.textSecondary }}>{tx.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-lg font-bold"
                      style={{ color: tx.amount > 0 ? colors.success : colors.text }}
                    >
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} ₸
                    </div>
                    {tx.cashback > 0 && (
                      <div className="text-xs font-medium flex items-center gap-1 justify-end" style={{ color: colors.success }}>
                        <Plus size={10} /> {tx.cashback}₸ кэшбек
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // AI Ассистент
  const AIAssistantScreen = () => {
    if (!isPremium) {
      return (
        <div className="space-y-6 p-4">
          <div className="text-center space-y-4 py-12">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl">
              🤖
            </div>
            <h2 className="text-3xl font-bold" style={{ color: colors.text }}>AI Финансовый Ассистент</h2>
            <p style={{ color: colors.textSecondary }}>Доступен только для пользователей с премиум подпиской</p>
            
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center" style={{ color: colors.text }}>Премиум подписка</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                  <li className="flex items-center gap-2">
                    <Check size={16} style={{ color: colors.success }} /> AI анализ расходов
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} style={{ color: colors.success }} /> Персональные рекомендации
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} style={{ color: colors.success }} /> Прогнозирование бюджета
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} style={{ color: colors.success }} /> Инвестиционные идеи
                  </li>
                </ul>
                <Button fullWidth onClick={() => {
                  setIsPremium(true);
                  showNotification('Премиум подписка активирована!');
                  setCurrentScreen('ai-assistant');
                }}>
                  Купить за 4,990₸/мес
                </Button>
              </div>
            </Card>
            
            <Button variant="secondary" fullWidth onClick={() => setCurrentScreen('home')}>
              Назад
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>AI Финансовый Ассистент</h2>
        </div>

        {/* Приветствие */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl flex-shrink-0">
              🤖
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>Привет, {userData?.name?.split(' ')[0]}!</h3>
              <p style={{ color: colors.textSecondary }}>
                Я ваш персональный финансовый помощник. Вот мои рекомендации:
              </p>
            </div>
          </div>
        </Card>

        {/* Текущий совет */}
        <Card>
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: colors.text }}>
              <Cpu size={20} /> Текущая рекомендация
            </h3>
            <div className="p-4 rounded-xl" style={{ backgroundColor: `${colors.primary}10` }}>
              <p style={{ color: colors.text }}>{aiAdvice}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => {
              const adviceList = [
                "📊 Анализ расходов: Вы тратите на 25% больше на продукты в этом месяце. Попробуйте покупать оптом.",
                "💡 Рекомендация: Откройте накопительный счет под 16% годовых. За год можно получить до 80,000₸.",
                "💰 Экономия: Вы можете сэкономить 5,200₸ в месяц, оптимизировав подписки и тарифы.",
                "📈 Инвестиции: Рассмотрите покупку ETF фондов. Средняя доходность 12-15% годовых.",
                "🛒 Кэшбек: Используйте кэшбек-программу в магазинах-партнерах. До 15% возврата."
              ];
              setAiAdvice(adviceList[Math.floor(Math.random() * adviceList.length)]);
              showNotification('Новая рекомендация сгенерирована');
            }}>
              <RefreshCw size={16} /> Новый совет
            </Button>
          </div>
        </Card>

        {/* Аналитика расходов */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Анализ ваших расходов</h3>
          <div className="space-y-4">
            {expenses.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span style={{ color: colors.text }}>{exp.category}</span>
                  <span style={{ color: colors.text }}>{exp.amount.toLocaleString()} ₸</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: colors.backgroundSecondary }}>
                  <div 
                    className="h-full rounded-full" 
                    style={{ 
                      width: `${exp.percent}%`,
                      backgroundColor: exp.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Инвестиционные идеи */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Инвестиционные идеи</h3>
          <div className="space-y-3">
            {[
              { name: 'ETF S&P 500', risk: 'Низкий', potential: '8-12%', amount: 'от 10,000₸' },
              { name: 'Технологические акции', risk: 'Средний', potential: '15-25%', amount: 'от 50,000₸' },
              { name: 'Облигации', risk: 'Низкий', potential: '6-9%', amount: 'от 100,000₸' }
            ].map((idea, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: colors.backgroundSecondary }}>
                <div>
                  <div className="font-semibold" style={{ color: colors.text }}>{idea.name}</div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>Риск: {idea.risk}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold" style={{ color: colors.success }}>{idea.potential}</div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>{idea.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Чат с AI */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Задайте вопрос AI</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Например: Как оптимизировать бюджет?"
                value=""
                onChange={() => {}}
                className="flex-1"
              />
              <Button>Отправить</Button>
            </div>
            <div className="text-xs" style={{ color: colors.textSecondary }}>
              Примеры вопросов: "Как сэкономить на коммуналке?", "Куда инвестировать 100,000₸?", "Как снизить расходы?"
            </div>
          </div>
        </Card>
      </div>
    );
  };

  // Аналитика расходов с графиком
  const AnalyticsScreen = () => {
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Аналитика расходов</h2>
        </div>

        {/* Итого за месяц */}
        <Card>
          <div className="text-center space-y-2">
            <div className="text-sm" style={{ color: colors.textSecondary }}>Расходы за декабрь</div>
            <div className="text-4xl font-bold" style={{ color: colors.text }}>
              {totalExpenses.toLocaleString()} ₸
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingDown size={16} style={{ color: colors.danger }} />
              <span className="text-sm font-medium" style={{ color: colors.danger }}>+12% к прошлому месяцу</span>
            </div>
          </div>
        </Card>

        {/* Круговая диаграмма */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Распределение расходов</h3>
          <div className="flex flex-col items-center space-y-4">
            {/* Визуализация круговой диаграммы */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: colors.text }}>100%</div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>Все расходы</div>
                </div>
              </div>
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {(() => {
                  let currentAngle = 0;
                  return expenses.map((exp, idx) => {
                    const angle = (exp.percent / 100) * 360;
                    const largeArcFlag = angle > 180 ? 1 : 0;
                    
                    const x1 = 50 + 40 * Math.cos(currentAngle * Math.PI / 180);
                    const y1 = 50 + 40 * Math.sin(currentAngle * Math.PI / 180);
                    
                    const x2 = 50 + 40 * Math.cos((currentAngle + angle) * Math.PI / 180);
                    const y2 = 50 + 40 * Math.sin((currentAngle + angle) * Math.PI / 180);
                    
                    const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                    
                    currentAngle += angle;
                    
                    return (
                      <path
                        key={idx}
                        d={path}
                        fill={exp.color}
                        stroke={colors.card}
                        strokeWidth="1"
                      />
                    );
                  });
                })()}
              </svg>
            </div>
            
            {/* Легенда */}
            <div className="w-full space-y-2">
              {expenses.map((exp, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: exp.color }}
                    />
                    <span style={{ color: colors.text }}>{exp.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold" style={{ color: colors.text }}>{exp.amount.toLocaleString()} ₸</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>{exp.percent}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Детали по категориям */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Детализация расходов</h3>
          <div className="space-y-4">
            {expenses.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium" style={{ color: colors.text }}>{exp.category}</span>
                  <span className="font-bold" style={{ color: colors.text }}>{exp.amount.toLocaleString()} ₸</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: colors.backgroundSecondary }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${exp.percent}%`,
                      backgroundColor: exp.color
                    }}
                  />
                </div>
                <div className="text-xs" style={{ color: colors.textSecondary }}>{exp.percent}% от общих расходов</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Сравнение с предыдущим месяцем */}
        <Card>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Сравнение с ноябрем</h3>
          <div className="space-y-3">
            {[
              { category: 'Продукты', current: 45000, previous: 38000, change: '+18%' },
              { category: 'Транспорт', current: 25000, previous: 22000, change: '+14%' },
              { category: 'Развлечения', current: 35000, previous: 28000, change: '+25%' },
              { category: 'Остальное', current: 30000, previous: 32000, change: '-6%' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <div style={{ color: colors.text }}>{item.category}</div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>
                    {item.previous.toLocaleString()}₸ → {item.current.toLocaleString()}₸
                  </div>
                </div>
                <div 
                  className={`font-bold ${item.change.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}
                >
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI рекомендации */}
        <Card onClick={() => isPremium ? setCurrentScreen('ai-assistant') : showNotification('Откройте премиум для доступа к AI ассистенту', 'info')}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0">
              {isPremium ? '🤖' : '👑'}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2" style={{ color: colors.text }}>
                {isPremium ? 'AI-Рекомендации' : 'Премиум рекомендации'}
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                {isPremium ? (
                  <>
                    <li>• Вы тратите на 15% больше на продукты. Попробуйте планировать покупки</li>
                    <li>• Рекомендуем открыть депозит на 200,000₸ под 16%</li>
                    <li>• Можно сэкономить 3,000₸ на связи, перейдя на другой тариф</li>
                  </>
                ) : (
                  <>
                    <li>• Откройте премиум для персональных рекомендаций по оптимизации бюджета</li>
                    <li>• AI ассистент анализирует ваши расходы и предлагает лучшие решения</li>
                    <li>• Получите доступ к прогнозам и инвестиционным идеям</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  // Маркетплейс
  const MarketplaceScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['Все', 'Электроника', 'Техника', 'Гаджеты', 'Аксессуары'];

    const filteredItems = marketplaceItems.filter(item => {
      const matchesCategory = selectedCategory === 'Все' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const addToCart = (item) => {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
      showNotification(`${item.name} добавлен в корзину! Кэшбек: ${item.cashback}%`);
    };

    const removeFromCart = (itemId) => {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const getCartTotal = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCashback = () => {
      return cartItems.reduce((total, item) => {
        const cashbackAmount = (item.price * item.quantity * item.cashback) / 100;
        return total + Math.round(cashbackAmount);
      }, 0);
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Магазин</h2>
        </div>

        {/* Поиск */}
        <Card noPadding>
          <div className="flex items-center p-4">
            <Search size={20} style={{ color: colors.textSecondary }} className="mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск товаров..."
              className="flex-1 outline-none bg-transparent"
              style={{ color: colors.text }}
            />
          </div>
        </Card>

        {/* Категории */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category ? '' : 'opacity-70'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? colors.primary : colors.backgroundSecondary,
                color: selectedCategory === category ? 'white' : colors.text
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Корзина */}
        {cartItems.length > 0 && (
          <Card onClick={() => setCurrentScreen('cart')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart size={24} style={{ color: colors.primary }} />
                <div>
                  <div className="font-semibold" style={{ color: colors.text }}>Корзина</div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>
                    {cartItems.length} товара • {getCartTotal().toLocaleString()} ₸
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg" style={{ color: colors.primary }}>
                  {getCartCashback()} ₸ кэшбек
                </div>
                <div className="text-xs" style={{ color: colors.textSecondary }}>Оформить заказ →</div>
              </div>
            </div>
          </Card>
        )}

        {/* Товары */}
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <div className="space-y-3">
                {/* Изображение товара */}
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center text-6xl mb-2"
                  style={{ backgroundColor: colors.backgroundSecondary }}
                >
                  {item.image}
                </div>

                {/* Информация о товаре */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-sm flex-1" style={{ color: colors.text }}>
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star size={12} style={{ color: colors.warning }} fill={colors.warning} />
                      <span className="text-xs" style={{ color: colors.textSecondary }}>{item.rating}</span>
                    </div>
                  </div>

                  {/* Цена и кэшбек */}
                  <div className="space-y-1">
                    <div className="text-lg font-bold" style={{ color: colors.text }}>
                      {item.price.toLocaleString()} ₸
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs px-2 py-1 rounded-full font-medium" 
                           style={{ backgroundColor: `${colors.success}20`, color: colors.success }}>
                        {item.cashback}% кэшбек
                      </div>
                      <div className="text-xs" style={{ color: colors.textSecondary }}>
                        +{(item.price * item.cashback / 100).toLocaleString()}₸
                      </div>
                    </div>
                  </div>

                  {/* Категория и кнопка */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 rounded" 
                          style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
                      {item.category}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{ backgroundColor: colors.primary, color: 'white' }}
                    >
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Промо баннер */}
        <Card>
          <div className="text-center space-y-4">
            <div className="text-6xl">🎁</div>
            <h3 className="text-xl font-bold" style={{ color: colors.text }}>Покупайте с выгодой!</h3>
            <p style={{ color: colors.textSecondary }}>
              Получайте до 20% кэшбека за покупки. 
              Используйте бонусные баллы для оплаты следующих покупок.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="px-3 py-1 rounded-lg text-sm font-bold" 
                   style={{ backgroundColor: `${colors.success}20`, color: colors.success }}>
                Кэшбек: {cashbackBalance}₸ доступно
              </div>
              <Button size="sm" variant="ghost" onClick={() => showNotification('Кэшбек можно использовать при оплате')}>
                Использовать
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  // Корзина
  const CartScreen = () => {
    const getTotal = () => {
      return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const getTotalCashback = () => {
      return cartItems.reduce((sum, item) => {
        return sum + Math.round((item.price * item.quantity * item.cashback) / 100);
      }, 0);
    };

    const updateQuantity = (itemId, newQuantity) => {
      if (newQuantity < 1) {
        removeItem(itemId);
        return;
      }
      setCartItems(prev => prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    };

    const removeItem = (itemId) => {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    if (cartItems.length === 0) {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentScreen('marketplace')}
              className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
            >
              <ArrowLeft size={24} style={{ color: colors.text }} />
            </button>
            <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Корзина</h2>
          </div>
          
          <div className="text-center space-y-6 py-20">
            <div className="text-8xl">🛒</div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>Корзина пуста</h3>
              <p style={{ color: colors.textSecondary }}>Добавьте товары из магазина</p>
            </div>
            <Button fullWidth onClick={() => setCurrentScreen('marketplace')}>
              Перейти в магазин
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('marketplace')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Корзина</h2>
        </div>

        {/* Список товаров */}
        <div className="space-y-3">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <div className="flex gap-4">
                {/* Изображение */}
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: colors.backgroundSecondary }}
                >
                  {item.image}
                </div>

                {/* Информация */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold" style={{ color: colors.text }}>{item.name}</h4>
                      <div className="text-xs" style={{ color: colors.textSecondary }}>{item.category}</div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Цена и количество */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary, color: colors.text }}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold min-w-[20px] text-center" style={{ color: colors.text }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary, color: colors.text }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold" style={{ color: colors.text }}>
                        {(item.price * item.quantity).toLocaleString()} ₸
                      </div>
                      <div className="text-xs font-medium" style={{ color: colors.success }}>
                        +{Math.round((item.price * item.quantity * item.cashback) / 100).toLocaleString()}₸ кэшбек
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Итого */}
        <Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span style={{ color: colors.textSecondary }}>Сумма товаров</span>
              <span style={{ color: colors.text }}>{getTotal().toLocaleString()} ₸</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: colors.textSecondary }}>Общий кэшбек</span>
              <span className="font-bold" style={{ color: colors.success }}>+{getTotalCashback().toLocaleString()} ₸</span>
            </div>
            <div className="pt-4 border-t" style={{ borderColor: colors.border }}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold" style={{ color: colors.text }}>Итого к оплате</span>
                <span className="text-2xl font-bold" style={{ color: colors.text }}>{getTotal().toLocaleString()} ₸</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Доставка */}
        <Card>
          <h3 className="font-bold mb-3" style={{ color: colors.text }}>Доставка</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} style={{ color: colors.primary }} />
                <span style={{ color: colors.text }}>Алматы, ул. Абая 123</span>
              </div>
              <button style={{ color: colors.primary }} className="text-sm">Изменить</button>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} style={{ color: colors.primary }} />
              <span style={{ color: colors.text }}>Завтра, 10:00 - 18:00</span>
            </div>
          </div>
        </Card>

        {/* Кнопка оформления */}
        <Button 
          fullWidth 
          size="lg"
          onClick={() => {
            const total = getTotal();
            const cashback = getTotalCashback();
            showNotification(`Заказ оформлен! Сумма: ${total.toLocaleString()}₸. Кэшбек: +${cashback}₸`, 'success');
            setCashbackBalance(prev => prev + cashback);
            setCartItems([]);
            setCurrentScreen('marketplace');
          }}
        >
          <ShoppingBag size={20} /> Оформить заказ
        </Button>

        {/* Предложение использовать кэшбек */}
        {cashbackBalance > 0 && (
          <Button 
            variant="secondary" 
            fullWidth
            onClick={() => {
              const discount = Math.min(cashbackBalance, getTotal());
              showNotification(`Использовано ${discount}₸ кэшбека!`);
              setCashbackBalance(prev => prev - discount);
            }}
          >
            <Percent size={20} /> Использовать {cashbackBalance}₸ кэшбека
          </Button>
        )}
      </div>
    );
  };

  // Экран переводов (оставляем как было, но добавляем фокус на инпуты)
  const TransferScreen = () => {
    const [step, setStep] = useState('method');
    const recipientInputRef = useRef(null);
    const amountInputRef = useRef(null);

    useEffect(() => {
      if (step === 'details' && recipientInputRef.current) {
        setTimeout(() => recipientInputRef.current.focus(), 100);
      }
    }, [step]);

    const transferMethods = [
      { id: 'phone', icon: Phone, title: 'По номеру телефона', desc: 'Перевод на +7 номер' },
      { id: 'card', icon: CreditCard, title: 'По номеру карты', desc: 'На карту любого банка' },
      { id: 'qr', icon: QrCode, title: 'По QR-коду', desc: 'Отсканируйте QR' },
      { id: 'bank', icon: Building2, title: 'Между своими счетами', desc: 'Внутренний перевод' }
    ];

    if (step === 'method') {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Переводы</h2>
          <div className="space-y-3">
            {transferMethods.map((method) => (
              <Card key={method.id} onClick={() => {
                setTransferData({ ...transferData, type: method.id });
                setStep('details');
              }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <method.icon size={26} style={{ color: colors.primary }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg" style={{ color: colors.text }}>{method.title}</div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>{method.desc}</div>
                  </div>
                  <ChevronRight size={24} style={{ color: colors.textSecondary }} />
                </div>
              </Card>
            ))}
          </div>

          {/* Недавние получатели */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: colors.text }}>Недавние</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['Асель К.', 'Нурлан А.', 'Дина С.', 'Бауыржан М.'].map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTransferData({ ...transferData, recipient: name });
                    setStep('details');
                  }}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, #A29BFE)` }}
                  >
                    {name[0]}
                  </div>
                  <span className="text-xs font-medium text-center" style={{ color: colors.text }}>{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (step === 'details') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setStep('method')}
              className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
            >
              <ArrowLeft size={24} style={{ color: colors.text }} />
            </button>
            <h2 className="text-2xl font-bold" style={{ color: colors.text }}>
              {transferMethods.find(m => m.id === transferData.type)?.title}
            </h2>
          </div>

          <Card>
            <div className="space-y-4">
              {transferData.type === 'phone' && (
                <Input
                  label="Номер телефона получателя"
                  value={transferData.recipient}
                  onChange={(val) => setTransferData({ ...transferData, recipient: val })}
                  placeholder="+7 701 123 4567"
                  icon={Phone}
                  type="tel"
                  inputRef={recipientInputRef}
                  autoFocus={true}
                />
              )}
              {transferData.type === 'card' && (
                <Input
                  label="Номер карты получателя"
                  value={transferData.recipient}
                  onChange={(val) => setTransferData({ ...transferData, recipient: val })}
                  placeholder="0000 0000 0000 0000"
                  icon={CreditCard}
                  inputRef={recipientInputRef}
                  autoFocus={true}
                />
              )}
              
              <Input
                label="Сумма перевода"
                value={transferData.amount}
                onChange={(val) => setTransferData({ ...transferData, amount: val })}
                placeholder="0 ₸"
                icon={DollarSign}
                type="number"
                inputRef={amountInputRef}
              />

              <Input
                label="Комментарий (необязательно)"
                value={transferData.comment}
                onChange={(val) => setTransferData({ ...transferData, comment: val })}
                placeholder="За что перевод?"
                icon={MessageSquare}
              />
            </div>
          </Card>

          {/* Карта списания */}
          <div>
            <label className="text-sm font-medium mb-2 block" style={{ color: colors.text }}>Списать с карты</label>
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard size={24} style={{ color: colors.primary }} />
                  <div>
                    <div className="font-semibold" style={{ color: colors.text }}>
                      {mockUserData.cards[selectedCard].number}
                    </div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>
                      {mockUserData.cards[selectedCard].balance.toLocaleString()} ₸
                    </div>
                  </div>
                </div>
                <ChevronRight size={20} style={{ color: colors.textSecondary }} />
              </div>
            </Card>
          </div>

          {/* Комиссия */}
          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info size={20} style={{ color: colors.info }} />
                <span style={{ color: colors.text }}>Комиссия</span>
              </div>
              <span className="font-bold" style={{ color: colors.secondary }}>0 ₸</span>
            </div>
          </Card>

          <Button
            fullWidth
            icon={Send}
            onClick={() => setStep('confirm')}
            disabled={!transferData.recipient || !transferData.amount}
          >
            Перевести
          </Button>
        </div>
      );
    }

    if (step === 'confirm') {
      return (
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl">
              ✓
            </div>
            <h2 className="text-3xl font-bold" style={{ color: colors.text }}>Подтверждение</h2>
            <p style={{ color: colors.textSecondary }}>Проверьте данные перевода</p>
          </div>

          <Card>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b" style={{ borderColor: colors.border }}>
                <span style={{ color: colors.textSecondary }}>Получатель</span>
                <span className="font-semibold" style={{ color: colors.text }}>{transferData.recipient}</span>
              </div>
              <div className="flex justify-between py-3 border-b" style={{ borderColor: colors.border }}>
                <span style={{ color: colors.textSecondary }}>Сумма</span>
                <span className="font-bold text-xl" style={{ color: colors.text }}>{transferData.amount} ₸</span>
              </div>
              {transferData.comment && (
                <div className="flex justify-between py-3 border-b" style={{ borderColor: colors.border }}>
                  <span style={{ color: colors.textSecondary }}>Комментарий</span>
                  <span className="font-semibold" style={{ color: colors.text }}>{transferData.comment}</span>
                </div>
              )}
              <div className="flex justify-between py-3">
                <span style={{ color: colors.textSecondary }}>Карта списания</span>
                <span className="font-semibold" style={{ color: colors.text }}>
                  ••{mockUserData.cards[selectedCard].number.slice(-4)}
                </span>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button
              fullWidth
              icon={CheckCircle}
              onClick={() => {
                showNotification(`Переведено ${transferData.amount} ₸`, 'success');
                setTransferData({ type: '', recipient: '', amount: '', comment: '' });
                setCurrentScreen('home');
              }}
            >
              Подтвердить перевод
            </Button>
            <Button variant="secondary" fullWidth onClick={() => setStep('details')}>
              Изменить
            </Button>
          </div>
        </div>
      );
    }
  };

  // ==================== РОУТИНГ ЭКРАНОВ ====================

  const renderScreen = () => {
    switch(currentScreen) {
      case 'splash': return <SplashScreen />;
      case 'onboarding': return <OnboardingScreen />;
      case 'registration': return <RegistrationScreen />;
      case 'home': return <HomeScreen />;
      case 'transfer': return <TransferScreen />;
      case 'payments': return <PaymentsScreen />;
      case 'bank': return <BankScreen />;
      case 'deposits': return <DepositsScreen />;
      case 'investments': return <InvestmentsScreen />;
      case 'analytics': return <AnalyticsScreen />;
      case 'qr': return <QRScreen />;
      case 'profile': return <ProfileScreen />;
      case 'marketplace': return <MarketplaceScreen />;
      case 'cart': return <CartScreen />;
      case 'ai-assistant': return <AIAssistantScreen />;
      default: return <HomeScreen />;
    }
  };

  // Остальные экраны (payments, bank, deposits, investments, qr, profile) остаются как в твоем коде
  // Я их не менял, чтобы не перегружать код

  const PaymentsScreen = () => {
    const services = [
      { icon: Smartphone, title: 'Мобильная связь', providers: ['Beeline', 'Kcell', 'Tele2', 'Altel'], color: colors.secondary },
      { icon: Wifi, title: 'Интернет', providers: ['Kazakhtelecom', 'Beeline', 'Altel'], color: colors.accent },
      { icon: Zap, title: 'Коммунальные услуги', providers: ['Вода', 'Электричество', 'Газ', 'Отопление'], color: colors.info },
      { icon: FileText, title: 'Штрафы и налоги', providers: ['ГАИ', 'Налоги', 'Судебные'], color: colors.danger }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Оплата услуг</h2>
        
        <div className="space-y-4">
          {services.map((service, idx) => (
            <Card key={idx}>
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon size={26} style={{ color: service.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.text }}>{service.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.providers.map((provider, pidx) => (
                      <button
                        key={pidx}
                        className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: `${service.color}15`,
                          color: service.color
                        }}
                      >
                        {provider}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const BankScreen = () => {
    const products = [
      {
        icon: PiggyBank,
        title: 'Депозиты',
        desc: 'Накопительные счета с процентами',
        rate: 'До 16% годовых',
        color: colors.secondary,
        badge: 'Выгодно',
        screen: 'deposits'
      },
      {
        icon: Wallet,
        title: 'Кредиты',
        desc: 'Наличные на любые цели',
        rate: 'От 12% годовых',
        color: colors.primary,
        screen: 'credits'
      },
      {
        icon: Percent,
        title: 'Рассрочка',
        desc: 'Покупки без переплат',
        rate: '0-0-12 месяцев',
        color: colors.accent,
        badge: 'Акция',
        screen: 'installment'
      },
      {
        icon: LineChart,
        title: 'Инвестиции',
        desc: 'Акции, облигации, фонды',
        rate: 'Доход до 25%',
        color: '#A29BFE',
        screen: 'investments'
      }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Банковские продукты</h2>
        
        <div className="space-y-4">
          {products.map((product, idx) => (
            <Card key={idx} onClick={() => setCurrentScreen(product.screen)}>
              <div className="relative">
                {product.badge && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.badge}
                  </div>
                )}
                <div className="flex items-start gap-4 pr-20">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <product.icon size={30} style={{ color: product.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1" style={{ color: colors.text }}>{product.title}</h3>
                    <p className="text-sm mb-2" style={{ color: colors.textSecondary }}>{product.desc}</p>
                    <div
                      className="inline-block px-3 py-1 rounded-lg text-sm font-bold"
                      style={{ backgroundColor: `${product.color}15`, color: product.color }}
                    >
                      {product.rate}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const DepositsScreen = () => {
    const deposits = [
      { name: 'Классический', rate: 14, term: 12, min: 100000, color: colors.primary },
      { name: 'Премиум', rate: 16, term: 24, min: 500000, color: colors.secondary, badge: 'Выгодно' },
      { name: 'Пенсионный', rate: 15, term: 36, min: 200000, color: colors.accent }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('bank')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Депозиты</h2>
        </div>

        <Card>
          <div className="text-center space-y-4">
            <div className="text-6xl">🏦</div>
            <h3 className="text-xl font-bold" style={{ color: colors.text }}>Калькулятор депозита</h3>
            <Input
              label="Сумма вклада"
              value=""
              onChange={() => {}}
              placeholder="100 000 ₸"
              type="number"
            />
            <div className="grid grid-cols-3 gap-3">
              {['100K', '500K', '1M'].map((amount) => (
                <button
                  key={amount}
                  className="py-2 rounded-xl font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: colors.backgroundSecondary, color: colors.text }}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {deposits.map((deposit, idx) => (
            <Card key={idx}>
              <div className="relative">
                {deposit.badge && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: deposit.color }}
                  >
                    {deposit.badge}
                  </div>
                )}
                <div className="space-y-3">
                  <h3 className="font-bold text-xl" style={{ color: colors.text }}>{deposit.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>Ставка</div>
                      <div className="font-bold text-lg" style={{ color: deposit.color }}>{deposit.rate}%</div>
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>Срок</div>
                      <div className="font-bold" style={{ color: colors.text }}>{deposit.term} мес</div>
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>Минимум</div>
                      <div className="font-bold" style={{ color: colors.text }}>{deposit.min/1000}K ₸</div>
                    </div>
                  </div>
                  <Button variant="secondary" fullWidth size="sm">
                    Оформить
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const InvestmentsScreen = () => {
    const portfolio = {
      total: 1250000,
      profit: 87500,
      profitPercent: 7.5
    };

    const assets = [
      { name: 'Apple Inc.', ticker: 'AAPL', amount: 350000, profit: 12.3, color: colors.success },
      { name: 'Tesla Inc.', ticker: 'TSLA', profit: -2.8, amount: 280000, color: colors.danger },
      { name: 'Microsoft', ticker: 'MSFT', amount: 420000, profit: 8.9, color: colors.success },
      { name: 'ETF S&P 500', ticker: 'SPY', amount: 200000, profit: 5.2, color: colors.success }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('bank')}
            className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: colors.text }} />
          </button>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Инвестиции</h2>
        </div>

        {/* Портфель */}
        <div
          className="rounded-3xl p-6 text-white"
          style={{ background: `linear-gradient(135deg, #A29BFE 0%, #6C5CE7 100%)` }}
        >
          <div className="space-y-4">
            <div>
              <div className="text-sm opacity-80">Общая стоимость портфеля</div>
              <div className="text-4xl font-bold">{portfolio.total.toLocaleString()} ₸</div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs opacity-80">Доходность</div>
                <div className="text-2xl font-bold text-green-300">+{portfolio.profit.toLocaleString()} ₸</div>
              </div>
              <div>
                <div className="text-xs opacity-80">Процент</div>
                <div className="text-2xl font-bold text-green-300">+{portfolio.profitPercent}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Активы */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold" style={{ color: colors.text }}>Мои активы</h3>
            <Button size="sm" icon={Plus}>Купить</Button>
          </div>
          <div className="space-y-3">
            {assets.map((asset, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-bold text-lg" style={{ color: colors.text }}>{asset.name}</div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>{asset.ticker}</div>
                    <div className="text-sm font-semibold mt-1" style={{ color: colors.text }}>
                      {asset.amount.toLocaleString()} ₸
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xl font-bold flex items-center gap-1"
                      style={{ color: asset.profit > 0 ? colors.success : colors.danger }}
                    >
                      {asset.profit > 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                      {asset.profit > 0 ? '+' : ''}{asset.profit}%
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Категории */}
        <div>
          <h3 className="text-lg font-bold mb-4" style={{ color: colors.text }}>Категории</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'Акции', icon: TrendingUp, color: colors.primary },
              { name: 'Облигации', icon: Award, color: colors.secondary },
              { name: 'ETF фонды', icon: Target, color: colors.accent }
            ].map((cat, idx) => (
              <button
                key={idx}
                className="p-4 rounded-2xl text-center space-y-2 transition-transform hover:scale-105"
                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
              >
                <cat.icon size={32} style={{ color: cat.color }} className="mx-auto" />
                <div className="text-sm font-semibold" style={{ color: colors.text }}>{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const QRScreen = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold" style={{ color: colors.text }}>QR Платежи</h2>

        {/* Сканер */}
        <Card>
          <div className="aspect-square rounded-2xl flex flex-col items-center justify-center space-y-4" style={{ backgroundColor: colors.backgroundSecondary }}>
            <div className="relative">
              <div className="w-48 h-48 border-4 rounded-3xl" style={{ borderColor: colors.primary, borderStyle: 'dashed' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <QrCode size={80} style={{ color: colors.primary }} />
              </div>
            </div>
            <Button icon={Camera}>Сканировать QR</Button>
          </div>
        </Card>

        {/* Мой QR */}
        <Card>
          <div className="text-center space-y-4">
            <h3 className="font-bold text-lg" style={{ color: colors.text }}>Мой QR для получения</h3>
            <div className="w-48 h-48 mx-auto rounded-2xl p-4" style={{ backgroundColor: colors.background }}>
              <div className="w-full h-full flex items-center justify-center text-8xl">
                <QrCode size={120} style={{ color: colors.text }} />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" fullWidth icon={Download}>Скачать</Button>
              <Button variant="secondary" fullWidth icon={Share2}>Поделиться</Button>
            </div>
          </div>
        </Card>

        {/* История QR платежей */}
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>История</h3>
          <div className="space-y-3">
            {[
              { place: 'Магнум', amount: -8450, date: '08.12.2025 16:30' },
              { place: 'Кофейня', amount: -1200, date: '08.12.2025 10:15' },
              { place: 'Аптека', amount: -3600, date: '07.12.2025 19:00' }
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                      <QrCode size={20} style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: colors.text }}>{item.place}</div>
                      <div className="text-sm" style={{ color: colors.textSecondary }}>{item.date}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold" style={{ color: colors.text }}>
                    {item.amount.toLocaleString()} ₸
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProfileScreen = () => {
    if (!userData) {
      return (
        <div className="space-y-6 text-center py-20">
          <div className="text-6xl mb-4">👤</div>
          <h2 className="text-2xl font-bold" style={{ color: colors.text }}>Войдите в профиль</h2>
          <Button onClick={() => setCurrentScreen('registration')}>Войти / Регистрация</Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Шапка профиля */}
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">
              {userData.name[0]}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold" style={{ color: colors.text }}>{userData.name}</h2>
              <div className="text-sm" style={{ color: colors.textSecondary }}>{userData.phone}</div>
              <div className="text-sm" style={{ color: colors.textSecondary }}>ИИН: {userData.iin}</div>
            </div>
            <button className="p-3 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: colors.backgroundSecondary }}>
              <Settings size={24} style={{ color: colors.text }} />
            </button>
          </div>
        </Card>

        {/* Премиум статус */}
        <Card onClick={() => setIsPremium(!isPremium)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isPremium ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-gray-400 to-gray-600'}`}>
                {isPremium ? '👑' : '⭐'}
              </div>
              <div>
                <div className="font-semibold text-lg" style={{ color: colors.text }}>
                  {isPremium ? 'Премиум аккаунт' : 'Обычный аккаунт'}
                </div>
                <div className="text-sm" style={{ color: colors.textSecondary }}>
                  {isPremium ? 'AI ассистент активен' : 'Откройте премиум для AI ассистента'}
                </div>
              </div>
            </div>
            <Button size="sm" variant={isPremium ? 'secondary' : 'primary'}>
              {isPremium ? 'Активен' : 'Активировать'}
            </Button>
          </div>
        </Card>

        {/* Документы */}
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Мои документы</h3>
          <div className="space-y-3">
            {userData.documents.map((doc, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                      <FileText size={24} style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: colors.text }}>
                        {doc.type === 'passport' ? 'Паспорт РК' : 'Водительское удостоверение'}
                      </div>
                      <div className="text-sm" style={{ color: colors.textSecondary }}>
                        {doc.number} • до {doc.expires}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} style={{ color: colors.textSecondary }} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Транспорт */}
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Мой транспорт</h3>
          <div className="space-y-3">
            {userData.vehicles.map((vehicle, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${colors.accent}20` }}>
                    🚗
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold" style={{ color: colors.text }}>{vehicle.model}</div>
                    <div className="text-sm" style={{ color: colors.textSecondary }}>
                      {vehicle.number} • VIN: {vehicle.vin}
                    </div>
                  </div>
                  <ChevronRight size={20} style={{ color: colors.textSecondary }} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Настройки */}
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: colors.text }}>Настройки</h3>
          <div className="space-y-3">
            {[
              { icon: Bell, title: 'Уведомления', subtitle: 'Push, SMS, Email' },
              { icon: Lock, title: 'Безопасность', subtitle: 'PIN, биометрия' },
              { icon: Globe, title: 'Язык', subtitle: 'Русский' },
              { icon: Shield, title: 'Конфиденциальность', subtitle: 'Данные и доступ' }
            ].map((setting, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                      <setting.icon size={22} style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: colors.text }}>{setting.title}</div>
                      <div className="text-sm" style={{ color: colors.textSecondary }}>{setting.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight size={20} style={{ color: colors.textSecondary }} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Выход */}
        <Button variant="danger" fullWidth onClick={() => {
          setUserData(null);
          setCurrentScreen('onboarding');
          showNotification('Вы вышли из аккаунта');
        }}>
          Выйти из аккаунта
        </Button>
      </div>
    );
  };

  const showHeader = !['splash', 'onboarding', 'registration'].includes(currentScreen);
  const showNav = ['home', 'payments', 'qr', 'bank', 'profile', 'marketplace', 'cart', 'analytics', 'ai-assistant'].includes(currentScreen);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      {showHeader && (
        <div
          className="sticky top-0 z-50 backdrop-blur-xl border-b"
          style={{
            backgroundColor: `${colors.card}95`,
            borderColor: colors.border
          }}
        >
          <div className="flex items-center justify-between p-4">
            {currentScreen !== 'home' && (
              <button 
                onClick={() => {
                  if (['transfer', 'payments', 'bank', 'deposits', 'analytics', 'qr', 'investments', 'marketplace', 'cart', 'ai-assistant'].includes(currentScreen)) {
                    setCurrentScreen('home');
                  } else {
                    window.history.back();
                  }
                }}
                className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-400 transition-colors"
              >
                <ArrowLeft size={24} style={{ color: colors.text }} />
              </button>
            )}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, #A29BFE)` }}
              >
                S
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: colors.text }}>Sapphire SuperApp</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110 relative"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <Bell size={20} style={{ color: colors.primary }} />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`${showNav ? 'pb-24' : ''} ${showHeader ? 'p-4' : ''}`}>
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      {showNav && (
        <div
          className="fixed bottom-0 left-0 right-0 border-t backdrop-blur-xl z-50"
          style={{
            backgroundColor: `${colors.card}95`,
            borderColor: colors.border
          }}
        >
          <div className="flex justify-around p-2">
            {[
              { id: 'home', icon: Home, label: 'Главная' },
              { id: 'marketplace', icon: ShoppingBag, label: 'Магазин' },
              { id: 'qr', icon: QrCode, label: 'QR' },
              { id: 'analytics', icon: LineChart, label: 'Аналитика' },
              { id: 'profile', icon: User, label: 'Профиль' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentScreen(tab.id)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all"
                style={{
                  color: currentScreen === tab.id ? colors.primary : colors.textSecondary,
                  backgroundColor: currentScreen === tab.id ? `${colors.primary}15` : 'transparent'
                }}
              >
                <tab.icon
                  size={24}
                  strokeWidth={currentScreen === tab.id ? 2.5 : 2}
                />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div
          className="fixed top-20 left-4 right-4 p-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-[slideDown_0.3s_ease]"
          style={{
            backgroundColor: colors.card,
            border: `2px solid ${notification.type === 'success' ? colors.success : notification.type === 'error' ? colors.danger : colors.info}`
          }}
        >
          {notification.type === 'success' && <CheckCircle size={24} style={{ color: colors.success }} />}
          {notification.type === 'error' && <AlertCircle size={24} style={{ color: colors.danger }} />}
          {notification.type === 'info' && <Info size={24} style={{ color: colors.info }} />}
          <span className="flex-1 font-medium" style={{ color: colors.text }}>{notification.message}</span>
          <button onClick={() => setNotification(null)}>
            <X size={20} style={{ color: colors.textSecondary }} />
          </button>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SapphireSuperApp;
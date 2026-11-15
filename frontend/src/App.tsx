// App.tsx
import './App.css'
import {useState} from "react";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import CurrencyCard from "./components/CurrencyCard.tsx";
import CalendarWidget from "./components/CalendarWidget.tsx";
import SavedCurrencies from "./components/SavedCurrencies.tsx";
import ScheduledList from "./components/ScheduledList.tsx";
import ExchangeRateOverview from "./components/ExchangeRateOverview.tsx";
import TransactionsTable from "./components/TransactionsTable.tsx";
import {useRates} from "./hooks/useRates.tsx";
import LoadingPage from "./components/LoadingPage.tsx";

function App() {
    const {rates, error, loading} = useRates();
    // Quote currency currently shown in the chart (drives the whole dashboard)
    const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

    if (error) return <div className="p-5 text-danger">Error: {error}</div>;
    if (loading) return <LoadingPage />;

    const active = selectedQuote ?? rates[0]?.quote;
    const activeRate = rates.find(r => r.quote === active);

    return (
        <DashboardLayout>
            <div className="row g-3">
                <aside className="col-12 col-xl-3 d-flex flex-column gap-3">
                    <CalendarWidget />
                    <SavedCurrencies />
                    <ScheduledList />
                </aside>

                <section className="col-12 col-xl-9 d-flex flex-column gap-3">
                    <div className="row g-3">
                        {rates.slice(0, 3).map((rate, i) => (
                            <div className="col-12 col-md-4" key={rate.quote}>
                                <CurrencyCard
                                    rate={rate}
                                    highlighted={i === 0}
                                    selected={rate.quote === active}
                                    onSelect={() => setSelectedQuote(rate.quote)}
                                />
                            </div>
                        ))}
                    </div>

                    {activeRate && (
                        <ExchangeRateOverview
                            base={activeRate.base}
                            quote={activeRate.quote}
                            currentRate={activeRate.rate}
                        />
                    )}
                    <TransactionsTable />
                </section>
            </div>
        </DashboardLayout>
    );
}

export default App;
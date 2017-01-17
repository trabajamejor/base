<?php

namespace TrabajaMejor\Base\Testing;

trait TestCaseTrait
{
    /**
     * Verify the number of dom elements.
     *
     * @param  string $selector the dom selector (jquery style)
     * @param  int    $number how many elements should be present in the dom
     *
     * @return $this
     */
    public function countElements($selector, $number)
    {
        $this->assertCount($number, $this->crawler->filter($selector));

        return $this;
    }

    /**
     * Verify element has attribute equal to a value.
     *
     * @param $selector
     * @param $attribute
     * @param $value
     *
     * @return $this
     */
    public function elementAttributeIsEquals($selector, $attribute, $value)
    {
        $this->assertEquals(
            $this->crawler->filter($selector)->first()->attr($attribute),
            $value
        );

        return $this;
    }
}